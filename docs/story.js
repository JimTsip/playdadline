// Family Rush site: the scroll story. story-sim.js plays one scripted match (seed 53); this file draws it
// on the tray and ties every step to the scroll with one pinned, scrubbed GSAP timeline. Without GSAP or
// with reduced motion the board stays at its first position and the captions read as a list.
(() => {
  const root = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const px = (n) => `/assets/fr/px/${n}.webp`;
  const ITEM = ['it_apple', 'it_banana', 'it_bread', 'it_grapes', 'it_milk', 'it_strawberry'].map(px);
  const sim = window.FRSim && FRSim.simulate(53, 5);
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const anim = !!(window.gsap && window.ScrollTrigger && sim && !still);
  if (anim) root.classList.add('anim');

  // ---------- the tray, the tiles and the cards ----------
  const N = sim ? sim.N : 7;
  const cellsEl = $('.cells'), gridEl = $('.grid'), fx = $('.fx-layer'), hint = $('.hint');
  for (let i = 0; i < N * N; i++) cellsEl.appendChild(document.createElement('i'));
  if (!sim) return;

  const tile = sim.tiles.map((t) => {
    const d = document.createElement('div');
    d.className = 'tile' + (t.special ? ' sp ' + t.special : '');
    const img = new Image(); img.src = t.special ? px('rocket') : ITEM[t.kind]; img.alt = ''; img.decoding = 'async';
    d.appendChild(img); gridEl.appendChild(d); return d;
  });
  const onBoard = new Set();
  sim.start.forEach((row, r) => row.forEach((id, c) => { onBoard.add(id); place(tile[id], r, c); }));
  tile.forEach((d, id) => { if (!onBoard.has(id)) d.style.visibility = 'hidden'; });
  function place(d, r, c) { d.style.transform = `translate(${c * 100}%, ${r * 100}%)`; }

  const MEMBER = { mom: 'm_mom', kid: 'm_kid', little: 'm_little' };
  const slots = [0, 1, 2].map(() => { const s = document.createElement('div'); s.className = 'slot'; $('.cards').appendChild(s); return s; });
  const card = sim.cards.map((c) => {
    const d = document.createElement('div');
    d.className = 'card' + (c.race ? ' race' : '');
    d.innerHTML = `<img class="who" src="${px(MEMBER[c.member])}" alt=""><img class="item" src="${ITEM[c.kind]}" alt="">` +
      `<b class="count">0/${c.need}</b><i class="bar"><i></i></i>${c.race ? '<span class="tag">RACE</span>' : ''}` +
      `<i class="tick"></i><em class="plus"></em>`;
    if (c.id > 2) d.classList.add('later');
    slots[c.slot].appendChild(d); return d;
  });
  if (!anim) return;

  // ---------- the timeline ----------
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.4 } });
  let t = 0;
  const cell = (r, c) => ({ xPercent: c * 100, yPercent: r * 100 });
  const box = (cells) => { // a rectangle around cells, in % of the tray
    const rs = cells.map((x) => x[0]), cs = cells.map((x) => x[1]);
    const r0 = Math.min(...rs), r1 = Math.max(...rs), c0 = Math.min(...cs), c1 = Math.max(...cs);
    return { left: (c0 / N) * 100 + '%', top: (r0 / N) * 100 + '%', width: ((c1 - c0 + 1) / N) * 100 + '%', height: ((r1 - r0 + 1) / N) * 100 + '%' };
  };
  const centre = (list) => ({ r: list.reduce((a, p) => a + p.r, 0) / list.length, c: list.reduce((a, p) => a + p.c, 0) / list.length });

  // the tiles leave inline transforms to GSAP from here on
  tile.forEach((d, id) => { d.style.transform = ''; d.style.visibility = ''; gsap.set(d, onBoard.has(id) ? {} : { autoAlpha: 0 }); });
  sim.start.forEach((row, r) => row.forEach((id, c) => gsap.set(tile[id], cell(r, c))));
  gsap.set(card.filter((_, i) => i > 2), { autoAlpha: 0, yPercent: 60 });

  // counters: proxies tweened with the scroll, so they also count back down
  const counter = (node, fmt = (v) => Math.round(v)) => { const p = { v: 0 }; return (v, at, d = 0.35) => tl.to(p, { v, duration: d, ease: 'none', onUpdate: () => (node.textContent = fmt(p.v)) }, at); };
  const youTo = counter($('.score-you')), rivalTo = counter($('.score-rival'));
  const have = sim.cards.map(() => 0);
  const cardTo = sim.cards.map((c, i) => counter($('.count', card[i]), (v) => `${Math.round(v)}/${c.need}`));

  const caps = $$('.cap'), rounds = $$('.round span');
  gsap.set(caps.slice(1), { autoAlpha: 0 }); gsap.set(rounds.slice(1), { autoAlpha: 0 });
  let capOn = 0, roundOn = 0;
  function swapIn(list, from, to, at) {
    tl.to(list[from], { autoAlpha: 0, y: -14, duration: 0.25 }, at);
    tl.fromTo(list[to], { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.3, immediateRender: false }, at + 0.15);
  }
  const caption = (i) => { if (i !== capOn) { swapIn(caps, capOn, i, t); capOn = i; } };
  const round = (i) => { if (i !== roundOn) { swapIn(rounds, roundOn, i, t); roundOn = i; } };

  function pts(text, r, c, at, big) {
    const e = document.createElement('b'); e.className = 'pts' + (big ? ' big' : ''); e.textContent = text;
    e.style.left = ((c + 0.5) / N) * 100 + '%'; e.style.top = ((r + 0.5) / N) * 100 + '%'; fx.appendChild(e);
    gsap.set(e, { autoAlpha: 0, xPercent: -50, yPercent: -50 });
    tl.fromTo(e, { autoAlpha: 0, scale: 0.6, y: 0 }, { autoAlpha: 1, scale: 1, y: -10, duration: 0.25, ease: 'back.out(3)', immediateRender: false }, at)
      .to(e, { autoAlpha: 0, y: -34, duration: 0.3 }, at + 0.55);
  }
  function glowBox(cells, cls, at, hold) {
    const e = document.createElement('i'); e.className = cls; Object.assign(e.style, box(cells)); fx.appendChild(e);
    gsap.set(e, { autoAlpha: 0 });
    tl.fromTo(e, { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, duration: 0.25, immediateRender: false }, at).to(e, { autoAlpha: 0, duration: 0.25 }, at + hold);
    return e;
  }

  let bolts = 0, chg = 0;
  // a spark flies from Mom's card to her power-up each time her pieces charge it (path in CSS: --p along, --arc up)
  const spark = $('.spark');
  function zap(t0) {
    tl.fromTo(spark, { '--p': 0, autoAlpha: 1, scale: 0.7 }, { '--p': 1, scale: 1.2, duration: 0.45, ease: 'power1.inOut', immediateRender: false }, t0)
      .fromTo(spark, { '--arc': 0 }, { '--arc': 1, duration: 0.225, ease: 'power1.out', yoyo: true, repeat: 1, immediateRender: false }, t0)
      .to(spark, { autoAlpha: 0, scale: 2, duration: 0.15 }, t0 + 0.45)
      .fromTo($('.ring', power), { scale: 1 }, { scale: 1.15, duration: 0.12, yoyo: true, repeat: 1, immediateRender: false }, t0 + 0.42);
  }
  const boltEls = $$('.bolts img'), buzz = $('.buzzer'), power = $('.power');
  gsap.set(boltEls, { scale: 0, autoAlpha: 0 });
  function setBolts(b, at) {
    for (let i = 0; i < 2; i++) {
      if (i < b && i >= bolts) tl.fromTo(boltEls[i], { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.35, ease: 'back.out(3)', immediateRender: false }, at);
      if (i >= b && i < bolts) tl.to(boltEls[i], { scale: 0, autoAlpha: 0, duration: 0.25 }, at);
    }
    // the buzzer's own segments show the bolts: 1 = green arc, 2 = gold
    if (b >= 1 && bolts < 1) tl.fromTo($('.b1', buzz), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, immediateRender: false }, at);
    if (b < 1 && bolts >= 1) tl.to($('.b1', buzz), { autoAlpha: 0, duration: 0.25 }, at);
    if (b === 2 && bolts < 2) tl.fromTo($('.b2', buzz), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, immediateRender: false }, at + 0.2);
    if (b < 2 && bolts === 2) tl.to($('.b2', buzz), { autoAlpha: 0, duration: 0.25 }, at);
    if (b === 2 && bolts < 2) tl.to(buzz, { '--ready': 1, duration: 0.3 }, at + 0.2)
      .fromTo($('.buzz', buzz), { scale: 1 }, { scale: 1.18, duration: 0.18, ease: 'power1.out', yoyo: true, repeat: 3, immediateRender: false }, at + 0.3);
    if (b < 2 && bolts === 2) tl.to(buzz, { '--ready': 0, duration: 0.3 }, at);
    bolts = b;
  }
  // DAD MODE: the hand comes in, hovers over the full buzzer, presses it, and everything bursts out of it
  const dmx = document.createElement('div'); dmx.className = 'dmx';
  const BITS = ['bolt', 'star', 'it_apple', 'bolt', 'star', 'it_bread', 'bolt', 'star', 'it_milk', 'bolt', 'star', 'it_grapes', 'star', 'bolt', 'it_banana', 'star', 'bolt', 'it_strawberry'];
  dmx.innerHTML = '<i class="dmx-rays"></i><i class="dmx-flash"></i><i class="dmx-ring"></i><i class="dmx-aim"></i>' +
    BITS.map((b) => (b === 'star' ? '<i class="dmx-star"></i>' : `<img class="dmx-p" src="${px(b)}" alt="">`)).join('') +
    `<img class="dmx-hand" src="${px('hand')}" alt="">`;
  buzz.appendChild(dmx);
  $('.dm').insertAdjacentHTML('afterbegin', '<i class="dm-sun"></i>');
  function dadPress(t0) {
    const hand = $('.dmx-hand'), aim = $('.dmx-aim'), hit = t0 + 1.05;
    // reach in from below, hover with a little hesitation, the aim ring pulsing
    tl.fromTo(hand, { autoAlpha: 0, x: 60, y: 110, rotate: 18 }, { autoAlpha: 1, x: 6, y: 22, rotate: -8, duration: 0.5, ease: 'power2.out', immediateRender: false }, t0)
      .to(hand, { y: 14, x: 2, duration: 0.18, ease: 'sine.inOut', yoyo: true, repeat: 1 }, t0 + 0.5)
      .to(hand, { y: 26, rotate: -4, duration: 0.15, ease: 'power1.out' }, t0 + 0.86)
      .fromTo(aim, { autoAlpha: 0.9, scale: 0.8 }, { autoAlpha: 0, scale: 1.5, duration: 0.35, repeat: 2, immediateRender: false }, t0 + 0.35)
      // the press: the finger drives in, the buzzer squashes
      .to(hand, { x: 0, y: 0, rotate: -8, scale: 0.94, duration: 0.1, ease: 'power3.in' }, hit - 0.1)
      .to(buzz, { scale: 0.84, duration: 0.1, ease: 'power3.in' }, hit - 0.1)
      .to(buzz, { scale: 1, duration: 0.4, ease: 'elastic.out(1.2, 0.4)' }, hit)
      .to(hand, { y: 40, x: 30, rotate: 14, autoAlpha: 0, duration: 0.35, ease: 'power2.in' }, hit + 0.15)
      // the burst: flash, shockwave, rays and a spray of bolts, stars and errands over the tray
      .fromTo('.dmx-flash', { autoAlpha: 1, scale: 0.3 }, { autoAlpha: 0, scale: 9, duration: 0.5, ease: 'power2.out', immediateRender: false }, hit)
      .fromTo('.dmx-ring', { autoAlpha: 1, scale: 0.2 }, { autoAlpha: 0, scale: 9, duration: 0.6, ease: 'power2.out', immediateRender: false }, hit)
      .fromTo('.dmx-rays', { autoAlpha: 0.95, scale: 0.2, rotate: 0 }, { autoAlpha: 0, scale: 1.3, rotate: 40, duration: 0.9, ease: 'power2.out', immediateRender: false }, hit)
      .to('.tray', { keyframes: { x: [0, -10, 9, -7, 5, -2, 0], rotate: [0, -1.2, 1, -0.6, 0.3, 0, 0] }, duration: 0.45, ease: 'none' }, hit + 0.02);
    const k = $('.stage').offsetWidth / 440; // the spray fits the tray, phone or desktop
    $$('.dmx-p, .dmx-star', dmx).forEach((el, i) => {
      const a = (-170 + (i * 89) % 140) * Math.PI / 180, d = (90 + (i * 47) % 140) * k; // fanned out over the tray
      tl.fromTo(el, { autoAlpha: 1, x: 0, y: 0, scale: 0.2, rotate: 0 },
        { autoAlpha: 1, x: Math.cos(a) * d * 0.95, y: Math.sin(a) * d * 1.5, scale: 1 + (i % 4) * 0.15, rotate: (i % 2 ? 1 : -1) * (120 + i * 20), duration: 0.65, ease: 'power3.out', immediateRender: false }, hit + 0.02 + (i % 5) * 0.015)
        .to(el, { y: `+=${40 + (i % 3) * 15}`, autoAlpha: 0, duration: 0.4, ease: 'power1.in' }, hit + 0.62);
    });
    setBolts(0, hit + 0.1);
    return hit + 0.45;
  }
  const press = (el, at) =>tl.to(el, { scale: 0.86, duration: 0.12, ease: 'power1.in' }, at).to(el, { scale: 1, duration: 0.3, ease: 'back.out(3)' }, at + 0.12);
  const pop = (el, at, hold = 0.9) => tl.fromTo(el, { autoAlpha: 0, scale: 0.4 }, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'back.out(2.2)', immediateRender: false }, at)
    .to(el, { autoAlpha: 0, scale: 1.08, duration: 0.25 }, at + hold);

  let you = 0;
  function event(e) {
    if (e.t === 'swap') {
      const [x, y] = e.ids; // x moves from a to b, y from b to a
      glowBox([e.a, e.b], 'hint-box', t, 0.75);
      tl.to(tile[x], { ...cell(...e.b), duration: 0.35, ease: 'power1.inOut' }, t + 0.35)
        .to(tile[y], { ...cell(...e.a), duration: 0.35, ease: 'power1.inOut' }, t + 0.35);
      t += 0.8;
    } else if (e.t === 'clear') {
      const els = e.list.map((p) => tile[p.id]), mid = centre(e.list);
      if (e.dad) { e.dad.forEach((c) => glowBox([[0, c], [N - 1, c]], 'col-glow', t, 0.9)); t += 0.35; }
      if (e.fire != null) { // the Rocket shoots along its line, pieces go from the nearest out
        const [r, c] = e.from, line = e.dir === 'v' ? [[0, c], [N - 1, c]] : [[r, 0], [r, N - 1]];
        tl.to(tile[e.fire], { scale: 1.25, duration: 0.2, yoyo: true, repeat: 1 }, t);
        glowBox(line, 'beam ' + e.dir, t + 0.3, 0.5);
        e.list.sort((p, q) => Math.abs(p.r - r) + Math.abs(p.c - c) - (Math.abs(q.r - r) + Math.abs(q.c - c)));
        t += 0.3;
      }
      if (e.collect != null) { // Mom's List Check: the pieces glow, then fly down to her card
        tl.to(els, { filter: 'drop-shadow(0 0 7px #fff) brightness(1.15)', duration: 0.25, stagger: 0.04 }, t);
        tl.to(els, { yPercent: N * 100 + 60, scale: 0.5, duration: 0.45, ease: 'power2.in', stagger: 0.05 }, t + 0.5);
        tl.set(els, { autoAlpha: 0 }, t + 1.3);
        t += 0.9;
      } else if (e.into) { // match 4: the pieces fly into the Rocket's cell
        const [r, c] = e.into;
        tl.to(els, { ...cell(r, c), duration: 0.25, ease: 'power2.in' }, t).to(els, { scale: 0, autoAlpha: 0, duration: 0.12 }, t + 0.25);
        tl.set(tile[e.rocket], cell(r, c), t);
        tl.fromTo(tile[e.rocket], { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, duration: 0.4, ease: 'back.out(2.5)', immediateRender: false }, t + 0.3);
        t += 0.4;
      } else {
        const order = e.list.map((p) => tile[p.id]), gap = e.fire != null ? 0.035 : e.dad ? 0.012 : 0.04;
        tl.to(order, { scale: 1.2, duration: 0.1, stagger: gap }, t).to(order, { scale: 0, autoAlpha: 0, duration: 0.18, stagger: gap }, t + 0.1);
        t += 0.15 + gap * order.length;
      }
      for (const p of e.list) if (p.card != null) have[p.card]++;
      const touched = [...new Set(e.list.filter((p) => p.card != null).map((p) => p.card))];
      for (const id of touched) { cardTo[id](have[id], t - 0.1, 0.25); tl.fromTo(card[id], { scale: 1.08 }, { scale: 1, duration: 0.3, immediateRender: false }, t - 0.1); }
      if (e.pts) pts('+' + e.pts, mid.r, mid.c, t - 0.15, e.pts >= 10);
      t += 0.25;
    } else if (e.t === 'fall') {
      for (const m of e.moves) {
        if (m.spawn) tl.fromTo(tile[m.id], { ...cell(m.from, m.c), autoAlpha: 1, scale: 1 }, { ...cell(m.to, m.c), autoAlpha: 1, duration: 0.38, ease: 'power2.in', immediateRender: false }, t);
        else tl.to(tile[m.id], { yPercent: m.to * 100, duration: 0.38, ease: 'power2.in' }, t);
      }
      tl.fromTo(e.moves.map((m) => tile[m.id]), { scaleY: 0.86 }, { scaleY: 1, duration: 0.2, ease: 'back.out(3)', immediateRender: false }, t + 0.38);
      t += 0.6;
    } else if (e.t === 'cardDone') {
      const old = card[e.card], nu = card[e.next], plus = $('.plus', old);
      plus.textContent = '+' + e.pts;
      tl.fromTo($('.tick', old), { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(3)', immediateRender: false }, t)
        .fromTo(plus, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: -14, duration: 0.3, immediateRender: false }, t + 0.1)
        .to(old, { yPercent: -70, autoAlpha: 0, duration: 0.3, ease: 'power2.in' }, t + 0.8)
        .to(nu, { yPercent: 0, autoAlpha: 1, duration: 0.35, ease: 'back.out(2)' }, t + 1);
      if (sim.cards[e.card].member === 'mom') { zap(t); tl.to(power, { '--chg': 1, duration: 0.3 }, t + 0.4).to(power, { '--ready': 1, duration: 0.3 }, t + 0.6); chg = 1; }
      t += 0.6;
    } else if (e.t === 'state') {
      if (e.score !== you) { youTo(e.score, t - 0.2); you = e.score; }
      setBolts(e.bolts, t - 0.2);
      const m = e.cards[0], c = Math.max(chg, Math.min(0.9, m.have / sim.cards[m.id].need)); // Mom's pieces charge her power-up
      if (c > chg) { zap(t - 0.6); tl.to(power, { '--chg': c, duration: 0.35 }, t - 0.2); chg = c; }
    }
  }

  // the rival family plays its turns in between: a close show, they lead going into the final
  const rival = { rocket: 0.75, dadmode: 0.8, power: 0.85, final: 1.06 };
  const ROUND = { rocket: 1, dadmode: 2, power: 3, final: 4 };
  const CAP = { intro: 0, match3: 1, match4: 2, rocket: 3, dadmode: 4, power: 5, final: 6, win: 7 };

  t = 0.4;
  for (const s of sim.steps) {
    caption(CAP[s.name]);
    if (ROUND[s.name] != null) { round(ROUND[s.name]); rivalTo(Math.round(you * rival[s.name]), t + 0.2, 0.6); }
    t += 0.5;
    if (s.name === 'intro') {
      tl.from(slots, { yPercent: 40, autoAlpha: 0, stagger: 0.12, duration: 0.4 }, t - 0.4);
    } else if (s.name === 'rocket') {
      const rk = s.ev.find((e) => e.fire != null);
      tl.to(tile[rk.fire], { rotate: 8, duration: 0.12, yoyo: true, repeat: 3 }, t); t += 0.5;
    } else if (s.name === 'dadmode') {
      t = dadPress(t);
      const dm = $('.dm');
      tl.fromTo(dm, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, immediateRender: false }, t)
        .fromTo($('.dm-sun', dm), { rotate: 0 }, { rotate: 50, duration: 1.7, ease: 'none', immediateRender: false }, t)
        .fromTo($('.dm-dad'), { yPercent: 60 }, { yPercent: 0, duration: 0.45, ease: 'back.out(1.6)', immediateRender: false }, t)
        .fromTo($('.dm-word'), { scale: 0.3, rotate: -8 }, { scale: 1, rotate: -4, duration: 0.45, ease: 'back.out(2.5)', immediateRender: false }, t + 0.2)
        .to(dm, { autoAlpha: 0, duration: 0.3 }, t + 1.4);
      t += 1.6;
    } else if (s.name === 'power') {
      press($('.ring', power), t); tl.to(power, { '--ready': 0, '--chg': 0, duration: 0.3 }, t + 0.2); chg = 0; t += 0.4;
    } else if (s.name === 'final') {
      pop($('.fx-final'), t, 1.1); tl.fromTo($('.x2'), { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'back.out(3)', immediateRender: false }, t + 0.5);
      t += 1.5;
    } else if (s.name === 'win') {
      tl.fromTo($('.win'), { autoAlpha: 0, scale: 0.5 }, { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'back.out(2)', immediateRender: false }, t)
        .to($('.win'), { autoAlpha: 0, y: -30, duration: 0.3 }, t + 1.3);
      t += 1.6;
      const un = $('.unlock');
      tl.fromTo(un, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, immediateRender: false }, t)
        .fromTo($('.unlock-card', un), { scale: 0.3, rotate: -10 }, { scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(1.8)', immediateRender: false }, t)
        .fromTo($('.viewers', un), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.35, immediateRender: false }, t + 0.5);
      t += 1.5;
    }
    for (const e of s.ev) event(e);
    if (s.name === 'match4') { pop($('.fx-extra'), t, 0.9); t += 1.2; }
    t += 0.4;
  }
  tl.to({}, { duration: 0.6 }, t); // a short hold on the unlocked studio before the pin lets go

  const pinned = $('.story-pin');
  ScrollTrigger.create({ trigger: pinned, pin: true, start: 'top top', end: () => '+=' + Math.round(innerHeight * tl.duration() * 0.22), scrub: 0.6, animation: tl });

  // ---------- hero: a soft drift as you leave it ----------
  // the hero comes on once the loader has gone ON AIR
  gsap.set('.hero .host, .hero .dad, .hero-copy > *', { autoAlpha: 0 });
  (window.frLoad || Promise.resolve()).then(() => {
    gsap.fromTo('.hero .host, .hero .dad', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'back.out(1.6)', stagger: 0.12, delay: 0.1 });
    gsap.fromTo('.hero-copy > *', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.07 });
  });
  const leave = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
  gsap.to('.hero .front-l, .hero .front-r', { yPercent: -30, ease: 'none', scrollTrigger: leave });
  gsap.to('.hero .podium', { yPercent: -12, ease: 'none', scrollTrigger: leave });
  gsap.to('.hero .back', { yPercent: 10, ease: 'none', scrollTrigger: leave });

  // ---------- studios: a quick sideways intro ----------
  const track = $('.track'), sp = $('.studios-pin');
  const shift = () => Math.max(0, track.scrollWidth - track.clientWidth);
  gsap.to(track, { x: () => -shift(), ease: 'none', scrollTrigger: { trigger: sp, pin: true, start: 'top top', end: () => '+=' + shift(), scrub: 0.5, invalidateOnRefresh: true } });

  // ---------- families pop in ----------
  ScrollTrigger.batch('.fam', { start: 'top 88%', once: true, onEnter: (b) => gsap.from(b, { y: 40, autoAlpha: 0, scale: 0.92, stagger: 0.07, duration: 0.5, ease: 'back.out(1.6)' }) });
  addEventListener('load', () => ScrollTrigger.refresh());
})();
