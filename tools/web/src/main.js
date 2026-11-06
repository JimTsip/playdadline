import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createDadRun } from "./dad-run.js";
gsap.registerPlugin(ScrollTrigger);
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const media = matchMedia("(prefers-reduced-motion: reduce)"),
  stage = $(".cinema-stage"),
  phone = $("#story-phone"),
  screen = $(".phone-screen"),
  film = $("#match-film"),
  copies = $$(".script-copy");
let paused = media.matches,
  progress = 0,
  active = -1,
  timeline,
  scrollTrigger,
  autoTween,
  preview,
  previewPromise,
  frame = 0,
  lastFrame = 0,
  requestedTime = 0,
  seeking = false,
  lastRequested = -1;
const portal = { x: 0, y: 0, w: 0, h: 0, pad: 10, r: 48, angle: 5 },
  FX = { charge: 0, full: 0, captionExit: 0 };
const beats = [0, 0.15, 0.285, 0.385, 0.53, 0.785, 0.935],
  names = [
    "MEET FAMILY RUSH",
    "MATCH THREE. HELP THE FAMILY.",
    "CHARGE DAD MODE",
    "LET DAD TAKE OVER",
    "BACK IN THE MATCH",
    "MEET YOUR BACKUP",
  ];
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v)),
  range = (a, b, v) => clamp((v - a) / (b - a));
function initialPortal() {
  const w = innerWidth,
    h = innerHeight,
    m = w < 700;
  const ph = m ? Math.min(h * 0.45, 390) : Math.min(h * 0.7, 690),
    pw = (ph * 590) / 1278 + 16;
  return {
    x: m ? w * 0.54 - pw * 0.18 : w * 0.64,
    y: m ? h * 0.475 : (h - ph) / 2 + 5,
    w: pw,
    h: ph,
    pad: m ? 7 : 10,
    r: m ? 31 : 46,
    angle: m ? 5 : 6,
  };
}
function buildTimeline() {
  timeline?.kill();
  const a = initialPortal(),
    W = innerWidth,
    H = innerHeight,
    m = W < 700;
  gsap.set(portal, a);
  gsap.set(FX, { charge: 0, full: 0, captionExit: 0 });
  const close = {
    ...a,
    x: m ? W * 0.5 - a.w * 0.5 : W * 0.61,
    y: m ? H * 0.42 : a.y - 10,
    angle: 0,
  };
  timeline = gsap.timeline({ paused: true, defaults: { ease: "none" } });
  timeline
    .to(portal, { ...a, angle: m ? 3 : 2, duration: 0.3 }, 0)
    .to(portal, { ...close, duration: 0.065, ease: "power1.inOut" }, 0.3)
    .to(
      portal,
      {
        x: 0,
        y: 0,
        w: W,
        h: H,
        pad: 0,
        r: 0,
        angle: 0,
        duration: 0.095,
        ease: "power2.inOut",
      },
      0.365,
    )
    .to(
      portal,
      { x: 0, y: 0, w: W, h: H, pad: 0, r: 0, angle: 0, duration: 0.205 },
      0.46,
    )
    .to(portal, { ...close, duration: 0.125, ease: "power2.inOut" }, 0.665)
    .to(portal, { ...a, angle: m ? 4 : 5, duration: 0.095 }, 0.79)
    .to(
      portal,
      {
        x: -a.w * 1.7,
        y: a.y + 30,
        angle: -23,
        duration: 0.115,
        ease: "power1.in",
      },
      0.885,
    )
    .to(FX, { full: 1, duration: 0.055 }, 0.405)
    .to(FX, { full: 0, duration: 0.055 }, 0.69)
    .to(FX, { charge: 1, duration: 0.105 }, 0.18)
    .to(FX, { captionExit: 1, duration: 0.01 }, 0.99);
  timeline.progress(progress);
  renderStory();
}
function seekFilm(t) {
  requestedTime = clamp(
    t,
    0,
    Number.isFinite(film.duration) ? Math.max(0, film.duration - 0.1) : 20.8,
  );
  if (film.readyState < 1 || seeking) return;
  if (Math.abs(film.currentTime - requestedTime) < 0.065) return;
  seeking = true;
  film.currentTime = requestedTime;
}
film.addEventListener("seeked", () => {
  seeking = false;
  if (progress >= 0.07 && Math.abs(film.currentTime - requestedTime) > 0.08)
    seekFilm(requestedTime);
});
film.addEventListener("loadedmetadata", () => {
  if (progress > 0.07) seekFilm(requestedTime);
  else if (!paused && !document.hidden) film.play().catch(() => {});
});
film.addEventListener("timeupdate", () => {
  if (progress < 0.07 && film.currentTime > 2.7) {
    film.currentTime = 0.1;
  } else if (progress >= 0.07 && !film.paused) film.pause();
});
film.addEventListener("error", () => phone.classList.add("film-unavailable"));
function setCaption(index) {
  if (index === active) return;
  active = index;
  copies.forEach((el, i) => {
    el.classList.toggle("active", i === index);
    el.setAttribute("aria-hidden", String(i !== index));
    el.inert = i !== index;
  });
  $("#scene-title").textContent = names[index];
}
function videoTime(p) {
  if (p < 0.18) return range(0.07, 0.18, p) * 1.7;
  if (p < 0.38) return 1.7 + range(0.18, 0.38, p) * 3.7;
  if (p < 0.69) return 5.4 + range(0.38, 0.69, p) * 10.2;
  // The current P5 capture returns from Dad Mode at 15.93 seconds.
  return 16.7 + range(0.69, 0.89, p) * 3.8;
}
async function ensurePreview() {
  if (previewPromise) return previewPromise;
  previewPromise = createDadRun($("#dad-canvas"))
    .then((p) => {
      preview = p;
      document.body.classList.add("preview-ready");
      invalidate();
      return p;
    })
    .catch((e) => {
      console.warn("Using recorded Dad Mode fallback.", e);
      document.body.classList.add("preview-fallback");
      const v = $("#run-fallback-film");
      v.src = v.dataset.src;
      return null;
    });
  return previewPromise;
}
function renderStory() {
  if (!timeline) return;
  const p = progress,
    m = innerWidth < 700,
    full = FX.full;
  // Reduced motion preserves the sequence with cuts, instead of a zoom or flight.
  const q = paused
    ? p >= 0.46 && p < 0.69
      ? { x: 0, y: 0, w: innerWidth, h: innerHeight, pad: 0, r: 0, angle: 0 }
      : initialPortal()
    : portal;
  Object.assign(phone.style, {
    left: q.x + "px",
    top: q.y + "px",
    width: q.w + "px",
    height: q.h + "px",
    padding: q.pad + "px",
    borderRadius: q.r + "px",
    transform: `rotate(${q.angle}deg)`,
    boxShadow: `0 0 0 ${3 * (1 - full)}px #ffffff,0 ${30 * (1 - full)}px ${65 * (1 - full)}px #03051288`,
    opacity: p > 0.94 ? String(1 - range(0.94, 1, p)) : 1,
  });
  screen.style.borderRadius = Math.max(0, q.r - q.pad) + "px";
  $(".phone-island").style.opacity = 1 - full;
  $(".phone-edge").style.opacity = 1 - full;
  $(".phone-shadow").style.opacity = (1 - full) * (1 - range(0.86, 0.98, p));
  let index = 0;
  if (p >= 0.12) index = 1;
  if (p >= 0.255) index = 2;
  if (p >= 0.355 && p < 0.74) index = 3;
  if (p >= 0.74) index = 4;
  if (p >= 0.9) index = 5;
  setCaption(index);
  copies.forEach((el, i) => {
    let alpha = i === index ? 1 : 0;
    if (i === 3) alpha *= 1 - range(0.4, 0.455, p);
    if (p > 0.985) alpha *= 1 - range(0.985, 1, p);
    el.style.opacity = alpha;
    el.style.visibility = alpha > 0.01 ? "visible" : "hidden";
    el.style.transform = m ? "translateY(0)" : `translateY(-45%)`;
  });
  const isFull = full > 0.55;
  document.body.classList.toggle("mode-full", isFull);
  $(".run-overlay").style.opacity = full;
  const hasPreview = !!preview;
  $("#dad-canvas").style.opacity = hasPreview ? full : 0;
  $(".run-fallback").style.opacity = hasPreview ? 0 : full;
  film.style.opacity = 1 - full;
  const runP = range(0.44, 0.69, p);
  $("#run-score").textContent = "+" + Math.round(runP * 48);
  $(".run-scream").style.opacity = 1 - range(0.5, 0.65, p);
  $(".run-scream").style.transform = paused
    ? "none"
    : `rotate(7deg) scale(${1 + runP * 0.12})`;
  $(".run-message").style.opacity = range(0.47, 0.53, p);
  const charge = Math.round(FX.charge * 6);
  $("#charge-value").textContent = charge + " / 6";
  $(".charge-strip").setAttribute(
    "aria-label",
    `Dad Mode charge ${charge} of 6`,
  );
  $(".charge-strip").classList.toggle("ready", charge === 6);
  $$(".charge-pips i").forEach((el, i) =>
    el.classList.toggle("filled", i < charge),
  );
  $(".charge-strip").style.opacity =
    range(0.12, 0.17, p) * (1 - range(0.36, 0.405, p));
  $(".piece-watermelon").style.transform = paused
    ? "none"
    : `translateY(${-p * 200}px) rotate(${15 + p * 100}deg)`;
  $(".piece-coconut").style.transform = paused
    ? "none"
    : `translateY(${p * 120}px) rotate(${-15 - p * 80}deg)`;
  $$(".flying-piece").forEach(
    (el) => (el.style.opacity = (1 - range(0.3, 0.39, p)) * (p > 0.87 ? 0 : 1)),
  );
  $(".actual-note").style.opacity = p > 0.87 ? 0 : 1 - full;

  $(".scene-progress i").style.transform = `scaleX(${p})`;
  if (p > 0.28) ensurePreview();
  if (p >= 0.07) {
    if (!film.paused) film.pause();
    seekFilm(videoTime(p));
  } else if (!paused && !document.hidden && film.paused) {
    if (film.currentTime > 2.7) film.currentTime = 0.1;
    film.play().catch(() => {});
  } else if (paused) film.pause();
  const fallback = $("#run-fallback-film");
  if (!preview && full > 0.05 && !paused && !document.hidden) {
    if (!fallback.src) fallback.src = fallback.dataset.src;
    fallback.play().catch(() => {});
  } else fallback.pause();
  if (full > 0.01) invalidate();
}
function invalidate() {
  if (!frame && !document.hidden) frame = requestAnimationFrame(draw);
}
function draw(t) {
  frame = 0;
  if (!preview || document.hidden) return;
  if (t - lastFrame >= 1000 / (innerWidth < 700 ? 30 : 45) || paused) {
    lastFrame = t;
    preview.render(range(0.44, 0.69, progress), t, paused);
  }
  if (FX.full > 0.01 && !paused) frame = requestAnimationFrame(draw);
}
function onScroll(self) {
  progress = self.progress;
  timeline?.progress(progress);
  renderStory();
}
scrollTrigger = ScrollTrigger.create({
  trigger: ".cinema",
  start: "top top",
  end: "bottom bottom",
  onUpdate: onScroll,
  onRefresh: (self) => {
    progress = self.progress;
    timeline?.progress(progress);
    renderStory();
  },
});
function jumpTo(p, instant = false) {
  stopAutoplay();
  const y = scrollTrigger.start + p * (scrollTrigger.end - scrollTrigger.start);
  scrollTo({ top: y, behavior: instant || paused ? "instant" : "smooth" });
}
function stopAutoplay() {
  autoTween?.kill();
  autoTween = null;
  $("#play-story").innerHTML = "LET’S PLAY! <span>▷</span>";
  $("#pause-story").hidden = true;
}
$("#play-story").addEventListener("click", () => {
  if (paused) {
    paused = false;
    syncMotion();
  }
  stopAutoplay();
  scrollTo({ top: scrollTrigger.start, behavior: "instant" });
  const clock = { p: 0 };
  $("#pause-story").hidden = false;
  autoTween = gsap.to(clock, {
    p: 1,
    duration: 29,
    ease: "none",
    onUpdate: () =>
      scrollTo({
        top:
          scrollTrigger.start +
          clock.p * (scrollTrigger.end - scrollTrigger.start),
        behavior: "instant",
      }),
    onComplete: stopAutoplay,
  });
});
$("#next-beat").addEventListener("click", () => {
  const next = beats.find((p) => p > progress + 0.04);
  if (next !== undefined) jumpTo(next);
  else {
    $("#powers").scrollIntoView({ behavior: paused ? "instant" : "smooth" });
  }
});
function syncMotion() {
  document.body.classList.toggle("motion-paused", paused);
  $("#motion-toggle").textContent = paused ? "Resume motion" : "Pause motion";
  $("#motion-toggle").setAttribute("aria-pressed", String(paused));
  if (paused) {
    stopAutoplay();
    film.pause();
    $("#dp-video").pause();
  }
  renderStory();
}
$("#motion-toggle").addEventListener("click", () => {
  paused = !paused;
  syncMotion();
});
media.addEventListener("change", (e) => {
  paused = e.matches;
  syncMotion();
});
addEventListener("wheel", stopAutoplay, { passive: true });
addEventListener("touchstart", stopAutoplay, { passive: true });
addEventListener("keydown", (e) => {
  if (
    [
      "ArrowDown",
      "ArrowUp",
      "PageDown",
      "PageUp",
      "Home",
      "End",
      "Escape",
    ].includes(e.key)
  )
    stopAutoplay();
});
$$('a[href^="#"]').forEach((a) => a.addEventListener("click", stopAutoplay));
const pauseButton = document.createElement("button");
pauseButton.id = "pause-story";
pauseButton.type = "button";
pauseButton.hidden = true;
pauseButton.textContent = "PAUSE STORY Ⅱ";
$(".scene-controls").insertBefore(pauseButton, $("#motion-toggle"));
pauseButton.addEventListener("click", stopAutoplay);
const families = [
  ["weekenders", "Weekenders"],
  ["bakers", "Bakers"],
  ["sprinters", "Sprinters"],
  ["campbells", "Campbells"],
  ["sunnyfields", "Sunnyfields"],
  ["rockwells", "Rockwells"],
  ["nakamuras", "Nakamuras"],
  ["papadopoulos", "Papadopoulos"],
  ["okafors", "Okafors"],
];
families.forEach(([key, name], i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = name;
  b.setAttribute("aria-pressed", String(!i));
  b.addEventListener("click", () => {
    $("#your-family").src = `/assets/fr3d/families/${key}.webp`;
    $("#your-family").alt = "The " + name + " family";
    $("#your-name").textContent = "THE " + name.toUpperCase();
    $$(".family-picker button").forEach((x) =>
      x.setAttribute("aria-pressed", String(x === b)),
    );
  });
  $(".family-picker").append(b);
});

const dadPowers = [
  ["owl", "OWL", "Golden arrows show the best route."],
  ["magnet", "MAGNET", "Coins and items in nearby lanes fly toward Dad."],
  ["bombtoss", "BOMB TOSS", "A big pop across all three lanes."],
  ["rocket", "ROCKET", "Send a rocket ahead and collect what it reaches."],
  ["duckies", "DUCKIES", "Two little helpers collect from the other lanes."],
  ["doublespeed", "DOUBLE SPEED", "Run faster. Collect more in the same time."],
  ["magicpush", "MAGIC PUSH", "Clear obstacles just before Dad reaches them."],
  ["expose", "EXPOSE", "Spot the pieces the other family needs."],
];
let chosenPower = "magnet";
function pickPower(key, play = false) {
  const p = dadPowers.find((p) => p[0] === key);
  chosenPower = key;
  $("#dp-icon").src = `/assets/fr3d/native/pu-${key}.webp`;
  $("#dp-icon").alt = p[1] + " power-up";
  $("#dp-title").textContent = p[1];
  $("#dp-description").textContent = p[2];
  $$(".dad-power-picker button").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.power === key)),
  );
  const v = $("#dp-video");
  v.pause();
  v.src = `/assets/fr3d/power-demos/${key}.mp4`;
  $("#dp-play").textContent = "WATCH THE POWER ▷";
  if (play && !paused) v.play().catch(() => {});
}
dadPowers.forEach(([key, name]) => {
  const b = document.createElement("button");
  b.type = "button";
  b.dataset.power = key;
  b.setAttribute("aria-pressed", String(key === "magnet"));
  const im = document.createElement("img");
  im.src = `/assets/fr3d/native/pu-${key}.webp`;
  im.alt = "";
  im.loading = "lazy";
  im.width = 45;
  im.height = 45;
  b.append(im, document.createTextNode(name));
  b.addEventListener("click", () => pickPower(key, true));
  $(".dad-power-picker").append(b);
});
$("#dp-play").addEventListener("click", () => {
  const v = $("#dp-video");
  if (!v.getAttribute("src")) pickPower(chosenPower);
  if (v.paused) v.play().catch(() => {});
  else v.pause();
});
$("#dp-video").addEventListener(
  "play",
  () => ($("#dp-play").textContent = "PAUSE POWER Ⅱ"),
);
$("#dp-video").addEventListener(
  "pause",
  () => ($("#dp-play").textContent = "WATCH THE POWER ▷"),
);
const demoObserver = new IntersectionObserver(
  (es) => {
    for (const e of es) if (!e.isIntersecting) $("#dp-video").pause();
  },
  { threshold: 0.1 },
);
demoObserver.observe($(".dad-power-preview"));

const mm = gsap.matchMedia();
mm.add("(prefers-reduced-motion: no-preference)", () => {
  $$(".power-item").forEach((el, i) =>
    gsap.from(el, {
      y: 70,
      opacity: 0.3,
      duration: 0.8,
      delay: i * 0.08,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    }),
  );
  $$(".power-item>img").forEach((el, i) =>
    gsap.to(el, {
      y: i % 2 ? -35 : 35,
      rotation: i % 2 ? -5 : 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".power-show",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }),
  );
  gsap.fromTo(
    ".family-you img",
    { x: -50, rotation: -9 },
    {
      x: 0,
      rotation: -2,
      ease: "none",
      scrollTrigger: {
        trigger: ".rival-stage",
        start: "top bottom",
        end: "bottom 40%",
        scrub: 1,
      },
    },
  );
  gsap.fromTo(
    ".family-them img",
    { x: 50, rotation: 9 },
    {
      x: 0,
      rotation: 2,
      ease: "none",
      scrollTrigger: {
        trigger: ".rival-stage",
        start: "top bottom",
        end: "bottom 40%",
        scrub: 1,
      },
    },
  );
  gsap.to(".qf-one", {
    y: -80,
    rotation: 4,
    ease: "none",
    scrollTrigger: {
      trigger: ".question",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.to(".qf-two", {
    y: 65,
    rotation: -4,
    ease: "none",
    scrollTrigger: {
      trigger: ".question",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
});
addEventListener(
  "resize",
  () => {
    buildTimeline();
    ScrollTrigger.refresh();
  },
  { passive: true },
);
document.fonts.ready.then(() => {
  buildTimeline();
  ScrollTrigger.refresh();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopAutoplay();
    film.pause();
    $("#run-fallback-film").pause();
    $("#dp-video").pause();
    cancelAnimationFrame(frame);
    frame = 0;
  } else renderStory();
});
$("#dad-canvas").addEventListener("preview-unavailable", () => {
  preview = null;
  document.body.classList.add("preview-fallback");
  renderStory();
});
buildTimeline();
syncMotion();
