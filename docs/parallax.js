// Family Rush site: scroll parallax for [data-speed] layers and reveal-on-scroll for the rules.
// Each layer moves by (viewport centre - its box centre) * speed, measured on its untransformed parent,
// through the `translate` property so the layer's own CSS transform (rotation, centring) stays put.
(() => {
  const root = document.documentElement;
  const still = matchMedia('(prefers-reduced-motion: reduce)');
  root.classList.add('js');

  const reveal = document.querySelectorAll('.step, .scoreboard, .studio-list li, .economy > div, .join-card');
  if ('IntersectionObserver' in window && !still.matches) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }, { rootMargin: '0px 0px -12% 0px' });
    reveal.forEach((el) => io.observe(el));
  } else {
    reveal.forEach((el) => el.classList.add('in'));
  }

  // pieces inside a small art card drift at most 40 px, so nothing leaves its frame
  const layers = [...document.querySelectorAll('[data-speed]')].map((el) => ({ el, speed: parseFloat(el.dataset.speed) || 0, box: el.parentElement, max: el.closest('.step-art') ? 40 : Infinity }));
  let queued = false;

  function frame() {
    queued = false;
    const mid = innerHeight / 2;
    for (const l of layers) {
      const r = l.box.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) continue;
      const y = (mid - r.top - r.height / 2) * l.speed; // speed > 0 lags behind the page (far), < 0 runs ahead (near)
      l.el.style.translate = `0 ${Math.max(-l.max, Math.min(l.max, y)).toFixed(1)}px`;
    }
  }
  function ask() { if (!queued) { queued = true; requestAnimationFrame(frame); } }

  function start() {
    if (still.matches) { layers.forEach((l) => (l.el.style.translate = '')); removeEventListener('scroll', ask); removeEventListener('resize', ask); return; }
    addEventListener('scroll', ask, { passive: true });
    addEventListener('resize', ask);
    ask();
  }
  still.addEventListener?.('change', start);
  start();
})();
