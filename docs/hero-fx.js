// Family Rush hero: a small live studio. One gameplay clip plays on the front phone, two blurred phones sit behind it,
// and game graphics (fruit, sparks, points, bolts, a DAD MODE burst, confetti) fly out from the phones in a loop.
// Transforms and opacity only, at most ~25 pieces alive, everything pauses when the hero is off screen, and with
// reduced motion the hero stays a still composition (poster frame, no flying graphics).
(() => {
  const hero = document.querySelector('.hero'), stage = document.querySelector('.hero-stage');
  const video = document.getElementById('hero-video');
  if (!hero || !stage) return;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const px = (n) => `/assets/fr/px/${n}.webp`;
  let visible = true;

  // ---------- the clip: starts only when allowed and on screen ----------
  if (video && !still) {
    const src = document.createElement('source'); src.src = video.dataset.mp4; src.type = 'video/mp4'; video.appendChild(src);
    video.load();
    const play = () => { const p = video.play(); if (p && p.catch) p.catch(() => {}); };
    video.addEventListener('loadeddata', () => { if (visible) play(); }, { once: true });
  }

  if (still || !window.gsap) return;
  const $ = (s, r = document) => r.querySelector(s);
  const rand = (a, b) => a + Math.random() * (b - a), pick = (l) => l[(Math.random() * l.length) | 0];
  const live = new Set(); // every running tween, so the whole hero can be paused at once
  const track = (t) => { live.add(t); const f = t.eventCallback('onComplete'); t.eventCallback('onComplete', () => { live.delete(t); if (f) f(); }); return t; };

  // ---------- geometry: the front phone's box, in the fx layers' own pixels ----------
  const back = $('.hfx-back'), front = $('.hfx-front'), main = $('.ph-m .phone');
  let cx = 0, cy = 0, hw = 80, hh = 170, S = 1;
  const measure = () => {
    const l = front.getBoundingClientRect(), p = main.getBoundingClientRect();
    cx = p.left - l.left + p.width / 2; cy = p.top - l.top + p.height / 2; hw = main.offsetWidth / 2; hh = main.offsetHeight / 2;
    S = Math.min(1.7, Math.max(.8, hw / 85));
  };
  const ring = (a, k) => ({ x: cx + Math.cos(a) * hw * k, y: cy + Math.sin(a) * hh * k }); // a point on an ellipse round the phone

  // ---------- pools ----------
  const make = (layer, cls, n, build) => Array.from({ length: n }, () => {
    const e = build ? build() : document.createElement('i'); e.classList.add('hfx', ...cls.split(' ')); layer.appendChild(e); gsap.set(e, { xPercent: -50, yPercent: -50 }); return e;
  });
  const img = (name) => () => { const e = new Image(); e.src = name === 'RAYS' ? '/assets/fr/rays-orange.webp' : px(name); e.alt = ''; e.decoding = 'async'; return e; };
  const ITEMS = ['it_apple', 'it_banana', 'it_bread', 'it_grapes', 'it_milk', 'it_strawberry', 'it_apple', 'it_strawberry'];
  const fruit = make(back, 'hfx-item', 5, null).map((e, i) => { const im = new Image(); im.src = px(ITEMS[i]); im.alt = ''; e.appendChild(im); im.style.cssText = 'width:100%;height:auto;display:block'; return e; });
  const rocket = (() => { const e = make(back, 'hfx-item', 1, null)[0]; const im = new Image(); im.src = px('rocket'); im.alt = ''; im.style.cssText = 'width:80%;height:auto;display:block'; e.appendChild(im); return e; })();
  const stars = make(front, 'hfx-star', 5);
  const pops = make(front, 'hfx-pts', 3);
  const bolts = [make(front, 'hfx-bolt', 1, img('bolt'))[0], make(front, 'hfx-bolt', 1, img('bolt'))[0]];
  const word = make(front, 'hfx-word', 1, img('w_dadmode'))[0];
  const rays = make(back, 'hfx-rays', 1, img('RAYS'))[0];
  const COL = ['#ff6a3d', '#ffc83a', '#5fd0b2', '#8e6cf0', '#ffffff', '#ff8fb1'];
  const confetti = make(front, 'hfx-conf', 8).map((e) => e);
  const busy = new Set();
  const take = (list) => { const e = list.find((x) => !busy.has(x)); if (e) busy.add(e); return e; };
  const done = (e) => () => { busy.delete(e); gsap.set(e, { autoAlpha: 0 }); };

  // ---------- one-shot effects ----------
  function spawnFruit(special) {
    const e = special ? (busy.has(rocket) ? null : (busy.add(rocket), rocket)) : take(fruit); if (!e) return;
    const side = Math.random() < .5 ? -1 : 1, a = side < 0 ? rand(Math.PI * .62, Math.PI * 1.25) : rand(-Math.PI * .25, Math.PI * .38);
    const from = ring(a, .55), dist = rand(hw * 1.3, hw * 2.6) * (Math.cos(a) < 0 ? -1 : 1) * Math.abs(Math.cos(a) || 1), up = rand(110, 220) * S, d = rand(1.7, 2.3);
    const tl = gsap.timeline({ onComplete: done(e) });
    tl.set(e, { x: from.x, y: from.y, scale: .3, rotation: rand(-30, 30), autoAlpha: 1 })
      .to(e, { x: from.x + dist * .9 + side * hw * .5, duration: d, ease: 'none' }, 0)
      .to(e, { y: from.y - up, duration: d * .42, ease: 'power2.out' }, 0)
      .to(e, { y: from.y + rand(40, 120) * S, duration: d * .58, ease: 'power2.in' }, d * .42)
      .to(e, { scale: rand(.95, 1.25) * S, duration: d * .3, ease: 'back.out(2)' }, 0)
      .to(e, { rotation: '+=' + rand(-260, 260), duration: d, ease: 'none' }, 0)
      .to(e, { autoAlpha: 0, duration: .3 }, d - .3);
    track(tl);
  }
  function spawnStars(n = 3) {
    const a0 = rand(0, Math.PI * 2);
    for (let i = 0; i < n; i++) {
      const e = take(stars); if (!e) return; const p = ring(a0 + rand(-.45, .45), rand(1.08, 1.4)), s = rand(.8, 1.5) * S;
      const tl = gsap.timeline({ onComplete: done(e), delay: i * .09 });
      tl.set(e, { x: p.x, y: p.y, scale: 0, rotation: rand(-30, 30), autoAlpha: 1 })
        .to(e, { scale: s, rotation: '+=70', duration: .22, ease: 'back.out(3)' })
        .to(e, { scale: 0, rotation: '+=70', autoAlpha: 0, duration: .38, ease: 'power2.in' });
      track(tl);
    }
  }
  function spawnPop() {
    const e = take(pops); if (!e) return; const a = pick([rand(-2.5, -.6), rand(2.2, 3.8), rand(-.5, .5)]), p = ring(a, rand(1.12, 1.3));
    e.textContent = pick(['+10', '+2', '+20', '+6', '+4']); e.className = 'hfx hfx-pts ' + pick(['', 'b', 'c']);
    const tl = gsap.timeline({ onComplete: done(e) });
    tl.set(e, { x: p.x, y: p.y, scale: .3, rotation: rand(-10, 10), autoAlpha: 1 })
      .to(e, { scale: 1 * S, duration: .28, ease: 'back.out(3)' })
      .to(e, { y: p.y - 56 * S, duration: .95, ease: 'power1.out' }, 0)
      .to(e, { autoAlpha: 0, duration: .3 }, .8);
    track(tl);
  }
  let burstSide = 1;
  function burst() {
    if (busy.has(word)) return; busy.add(word); busy.add(rays);
    burstSide *= -1; const wx = cx + burstSide * (hw + 70 * S), wy = cy - hh * .5;
    const tl = gsap.timeline({ onComplete: () => { done(word)(); done(rays)(); } });
    tl.set(word, { x: wx, y: wy, scale: .2, rotation: burstSide * -8, autoAlpha: 1 })
      .set(rays, { x: wx, y: wy, scale: .4, rotation: 0, autoAlpha: 0 })
      .to(rays, { autoAlpha: .6, scale: 1, duration: .35, ease: 'power2.out' }, 0)
      .to(rays, { rotation: 50, duration: 1.7, ease: 'none' }, 0)
      .to(word, { scale: 1, duration: .45, ease: 'back.out(2.6)' }, 0)
      .to(word, { rotation: burstSide * 6, duration: 1.1, ease: 'sine.inOut' }, .3)
      .to([word, rays], { autoAlpha: 0, scale: '*=1.12', duration: .3, ease: 'power2.in' }, 1.5);
    // the bolt pair either side of the phone
    bolts.forEach((b, i) => {
      if (busy.has(b)) return; busy.add(b); const sd = i ? 1 : -1, bx = cx + sd * (hw + 28 * S), by = cy + hh * .15;
      const bt = gsap.timeline({ onComplete: done(b) });
      bt.set(b, { x: bx, y: by, scale: 0, rotation: sd * 18, autoAlpha: 1 })
        .to(b, { scale: 1.15 * S, duration: .3, ease: 'back.out(3)' })
        .to(b, { y: by - 18 * S, rotation: sd * 8, duration: .7, ease: 'sine.inOut', yoyo: true, repeat: 1 })
        .to(b, { autoAlpha: 0, scale: .6, duration: .25 }, '>-.1');
      track(bt);
    });
    // confetti
    confetti.forEach((c, i) => {
      if (busy.has(c)) return; busy.add(c); const ang = rand(0, Math.PI * 2), dist = rand(70, 190) * S, ct = gsap.timeline({ onComplete: done(c), delay: .08 + i * .02 });
      c.style.background = COL[i % COL.length];
      ct.set(c, { x: wx, y: wy, scale: rand(.8, 1.3), rotation: rand(0, 360), autoAlpha: 1 })
        .to(c, { x: wx + Math.cos(ang) * dist, duration: 1.3, ease: 'power2.out' }, 0)
        .to(c, { y: wy + Math.sin(ang) * dist * .7 - 40, duration: .55, ease: 'power2.out' }, 0)
        .to(c, { y: '+=' + rand(120, 200) * S, duration: .85, ease: 'power1.in' }, .55)
        .to(c, { rotation: '+=' + rand(-500, 500), rotationX: rand(0, 360), duration: 1.4, ease: 'none' }, 0)
        .to(c, { autoAlpha: 0, duration: .3 }, 1.1);
      track(ct);
    });
    spawnStars(3);
    track(tl);
  }

  // ---------- the director: a few timers on the GSAP ticker ----------
  const clock = { fruit: 0, star: 1, pop: 1.5, burst: 2.4, rocket: 4 };
  const direct = (_t, ms) => {
    const dt = Math.min(.1, ms / 1000);
    for (const k in clock) clock[k] -= dt;
    if (clock.fruit < 0) { spawnFruit(false); clock.fruit = rand(.34, .6); }
    if (clock.star < 0) { spawnStars(rand(0, 1) < .5 ? 2 : 3); clock.star = rand(.7, 1.2); }
    if (clock.pop < 0) { spawnPop(); clock.pop = rand(.9, 1.5); }
    if (clock.rocket < 0) { spawnFruit(true); clock.rocket = rand(7, 10); }
    if (clock.burst < 0) { burst(); clock.burst = rand(7.5, 9.5); }
  };

  // ---------- phones: float, parallax with the pointer, a slow drift on touch screens ----------
  const L = $('.ph-l'), R = $('.ph-r'), M = $('.ph-m');
  gsap.set($('.ph-m .ph-in'), { rotation: -6 }); gsap.set($('.ph-l .ph-in'), { rotation: 9 }); gsap.set($('.ph-r .ph-in'), { rotation: -11 });
  gsap.from('.ph', { scale: .7, autoAlpha: 0, duration: .8, ease: 'back.out(1.5)', stagger: .12, delay: .15 });
  const idle = [];
  [[M, 9, 3.4, 0], [L, 8, 4.1, .6], [R, 7, 3.7, 1.1]].forEach(([el, y, d, dl]) => {
    const inner = $('.ph-in', el);
    idle.push(gsap.to(inner, { y, rotation: '+=1.6', duration: d, delay: dl, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
  });
  const depth = [[L, 10], [R, 14], [M, 22], [back, 36], [front, 36]];
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  let moveFns = [];
  if (fine) {
    moveFns = depth.map(([el, k]) => [gsap.quickTo(el, 'x', { duration: .9, ease: 'power3.out' }), gsap.quickTo(el, 'y', { duration: .9, ease: 'power3.out' }), k]);
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect(), nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
      moveFns.forEach(([qx, qy, k]) => { qx(-nx * k * 2); qy(-ny * k * 1.4); });
    });
  } else {
    depth.forEach(([el, k], i) => idle.push(gsap.to(el, { x: k * .5 * (i % 2 ? 1 : -1), duration: 5 + i, ease: 'sine.inOut', yoyo: true, repeat: -1 })));
  }

  // ---------- on / off with the hero ----------
  let ticking = false;
  const set = (on) => {
    visible = on;
    if (on && !ticking) { measure(); gsap.ticker.add(direct); ticking = true; } else if (!on && ticking) { gsap.ticker.remove(direct); ticking = false; }
    live.forEach((t) => t.paused(!on)); idle.forEach((t) => t.paused(!on));
    if (video) { if (on) { if (video.readyState >= 2) { const p = video.play(); if (p && p.catch) p.catch(() => {}); } } else video.pause(); }
  };
  measure(); addEventListener('resize', measure);
  if (window.ScrollTrigger) { gsap.registerPlugin(ScrollTrigger); ScrollTrigger.create({ trigger: hero, start: 'top bottom', end: 'bottom top', onToggle: (s) => set(s.isActive) }); }
  else new IntersectionObserver((en) => set(en[0].isIntersecting), { threshold: 0 }).observe(hero);
  set(true);
  document.addEventListener('visibilitychange', () => set(!document.hidden && visible));
})();
