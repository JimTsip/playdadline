import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createDadRun } from "./dad-run.js";
gsap.registerPlugin(ScrollTrigger);
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
let paused = reduced.matches,
  progress = 0,
  step = 0,
  run = null,
  runPromise = null,
  raf = 0,
  lastFrame = 0,
  visible = false,
  seeking = false,
  requested = 0;
const film = $("#match-film"),
  canvas = $("#dad-canvas"),
  fallback = $("#run-film");
const clamp = (n, a = 0, b = 1) => Math.max(a, Math.min(b, n));
const range = (a, b, n) => clamp((n - a) / (b - a));
const mm = gsap.matchMedia();
mm.add("(prefers-reduced-motion: no-preference)", () => {
  const scope = gsap.context(() => {
    gsap.to(".hero-family", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".hero-word", {
      xPercent: -15,
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".running-line div", {
      xPercent: -18,
      ease: "none",
      scrollTrigger: {
        trigger: ".running-line",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    $$("[data-depth]").forEach((el) =>
      gsap.fromTo(
        el,
        { y: () => -Number(el.dataset.depth) / 2 },
        {
          y: () => Number(el.dataset.depth),
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section"),
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      ),
    );
    $$(".reveal").forEach((el) =>
      gsap.from(el, {
        y: 45,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }),
    );
  });
  return () => scope.revert();
});
function setStep(n) {
  step = n;
  $$(".classic-step").forEach((e, i) => e.classList.toggle("active", i === n));
  $("#scene-title").textContent = [
    "MAKE YOUR MOVE",
    "CALL IN THE FAMILY",
    "LET DAD TAKE OVER",
    "MAKE IT COUNT",
  ][n];
  $("#classic-word").textContent = ["MATCH.", "TEAMWORK.", "DAD MODE.", "WIN."][
    n
  ];
}
function seek(t) {
  requested = t;
  if (film.readyState < 1 || seeking || Math.abs(film.currentTime - t) < 0.08)
    return;
  seeking = true;
  film.currentTime = t;
}
film.addEventListener("seeked", () => {
  seeking = false;
  if (progress >= 0.06 && Math.abs(film.currentTime - requested) > 0.12)
    seek(requested);
});
film.addEventListener("timeupdate", () => {
  if (progress < 0.06 && film.currentTime > 2.7) film.currentTime = 0.1;
});
function draw(t) {
  raf = 0;
  if (!visible || document.hidden || !run) return;
  if (t - lastFrame > 1000 / (innerWidth < 700 ? 30 : 45) || paused) {
    lastFrame = t;
    run.render(range(0.4, 0.7, progress), t, paused);
  }
  if (!paused) raf = requestAnimationFrame(draw);
}
function requestDraw() {
  if (!raf) raf = requestAnimationFrame(draw);
}
function initRun() {
  if (runPromise) return runPromise;
  runPromise = createDadRun(canvas)
    .then((r) => {
      run = r;
      document.body.classList.add("preview-ready");
      requestDraw();
    })
    .catch(() => {
      canvas.hidden = true;
      fallback.src = fallback.dataset.src;
    });
  return runPromise;
}
function renderClassic(p) {
  progress = clamp(p);
  const n = p < 0.22 ? 0 : p < 0.4 ? 1 : p < 0.7 ? 2 : 3;
  if (n !== step) setStep(n);
  const full = range(0.39, 0.47, p) * (1 - range(0.65, 0.73, p));
  visible = full > 0.01;
  $(".run-world").style.opacity = full;
  $(".run-world").style.visibility = visible ? "visible" : "hidden";
  document.body.classList.toggle("run-active", full > 0.8);
  const scale = 1 + full * (innerWidth < 700 ? 1.6 : 2.5);
  const x = innerWidth < 700 ? "-50%" : "0%";
  $(".game-phone").style.transform =
    `translateX(${x}) rotate(${(1 - full) * 5}deg) scale(${scale})`;
  $(".game-phone").style.opacity = 1 - full;
  $(".chapter-progress i").style.transform = `scaleX(${p})`;
  if (p >= 0.06) {
    film.pause();
    const t =
      p < 0.22
        ? range(0.06, 0.22, p) * 1.7
        : p < 0.4
          ? 1.7 + range(0.22, 0.4, p) * 2.1
          : p < 0.7
            ? 3.8 + range(0.4, 0.7, p) * 11.8
            : 16.7 + range(0.7, 1, p) * 3.8;
    seek(Math.min(t, (film.duration || 21) - 0.15));
  } else if (!paused && !document.hidden) {
    if (film.currentTime > 2.7) film.currentTime = 0.1;
    film.play().catch(() => {});
  }
  if (p > 0.3) initRun();
  if (visible) {
    if (run) requestDraw();
    else if (fallback.src && !paused) fallback.play().catch(() => {});
  } else fallback.pause();
}
const classicTrigger = ScrollTrigger.create({
  trigger: ".classic",
  start: "top top",
  end: "bottom bottom",
  onRefresh: (self) => {
    if (!reduced.matches) renderClassic(self.progress);
  },
  onUpdate: (self) => {
    if (!reduced.matches) renderClassic(self.progress);
  },
  onLeave: () => {
    visible = false;
    film.pause();
    fallback.pause();
  },
  onEnterBack: (self) => renderClassic(self.progress),
});
$("#next-step").addEventListener("click", () => {
  const next = [0.06, 0.25, 0.49, 0.78].find((p) => p > progress + 0.05) ?? 0;
  if (reduced.matches) {
    progress = next;
    renderClassic(next);
  } else
    window.scrollTo({
      top:
        classicTrigger.start +
        next * (classicTrigger.end - classicTrigger.start),
      behavior: paused ? "instant" : "smooth",
    });
});
function motion() {
  document.body.classList.toggle("motion-paused", paused);
  $("#motion-toggle").textContent = paused ? "▷" : "Ⅱ";
  $("#motion-toggle").setAttribute("aria-pressed", String(paused));
  $("#motion-toggle").setAttribute(
    "aria-label",
    paused ? "Resume animations" : "Pause animations",
  );
  ScrollTrigger.getAll().forEach((t) => {
    if (t.animation) t.animation.paused(paused);
  });
  if (paused) {
    film.pause();
    fallback.pause();
    if (run && visible) requestDraw();
  } else renderClassic(progress);
}
$("#motion-toggle").addEventListener("click", () => {
  paused = !paused;
  motion();
});
reduced.addEventListener("change", () => {
  paused = reduced.matches;
  motion();
  ScrollTrigger.refresh();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    film.pause();
    fallback.pause();
    cancelAnimationFrame(raf);
    raf = 0;
  } else if (visible) requestDraw();
});
canvas.addEventListener("preview-unavailable", () => {
  document.body.classList.remove("preview-ready");
  fallback.src = fallback.dataset.src;
  if (visible && !paused) fallback.play().catch(() => {});
});
const families = {
  weekenders: ["THE WEEKENDERS", "Big plans. Bigger family energy."],
  bakers: [
    "THE BAKERS",
    "Fresh out of the oven. Ready for a little competition.",
  ],
  sprinters: ["THE SPRINTERS", "Ready, set, go. Speed runs in this family."],
  campbells: ["THE CAMPBELLS", "A little adventure is always on the list."],
};
$$("[data-family]").forEach((b) =>
  b.addEventListener("click", () => {
    const key = b.dataset.family;
    $$("[data-family]").forEach((e) =>
      e.setAttribute("aria-pressed", String(e === b)),
    );
    $("#family-name").textContent = families[key][0];
    $("#family-line").textContent = families[key][1];
    $("#family-art").src = `/assets/fr-next/families/${key}.webp`;
    $("#family-art").alt = families[key][0];
  }),
);
const powers = {
  magnet: [
    "COME TO DADDY.",
    "Pull the nearby coins and groceries straight to Dad. A little family magnetism.",
  ],
  owl: [
    "A BIRD’S-EYE ADVANTAGE.",
    "Let Owl help you collect along the road while Dad keeps the rush going.",
  ],
  rocket: [
    "MAKE SOME ROOM.",
    "A rocket-powered helping hand for a Dad with places to be.",
  ],
  duckies: [
    "QUACK ATTACK.",
    "Two ducks run the other lanes for you. Nobody said family help had to be sensible.",
  ],
};
$$("[data-power]").forEach((b) =>
  b.addEventListener("click", () => {
    $$("[data-power]").forEach((e) =>
      e.setAttribute("aria-pressed", String(e === b)),
    );
    const p = powers[b.dataset.power];
    $("#power-title").textContent = p[0];
    $("#power-description").textContent = p[1];
  }),
);
$("#puzzle-place").addEventListener("click", () => {
  const scene = $(".puzzle-scene"),
    done = scene.classList.toggle("complete");
  $("#puzzle-status").textContent = done
    ? "9 / 9 · PUZZLE COMPLETE!"
    : "8 / 9 · Try the finishing touch";
  $("#puzzle-place").innerHTML = done
    ? "ONE MORE TIME <span>↻</span>"
    : "PLACE THE LAST PIECE <span>↗</span>";
  $(".puzzle-grid").setAttribute(
    "aria-label",
    done
      ? "The family sandcastle puzzle is complete"
      : "A family sandcastle puzzle with one piece missing",
  );
});
new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting && progress < 0.06 && !paused)
        film.play().catch(() => {});
      else if (!e.isIntersecting) film.pause();
    }),
  { threshold: 0.1 },
).observe($(".classic"));
window.addEventListener("pagehide", () => {
  cancelAnimationFrame(raf);
  run?.dispose();
  mm.revert();
});
document.fonts.ready.then(() => ScrollTrigger.refresh());
window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
motion();
