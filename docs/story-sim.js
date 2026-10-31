// Family Rush site: the scripted match the story section plays while you scroll.
// A small copy of the game's rules (7x7, match 3, 4 in a row = Rocket, cards, DAD MODE, List Check,
// final round x2) that turns one seed into a list of steps. story.js draws them; node can test seeds:
//   node docs/story-sim.js        -> first seed whose match tells the whole story
(function (root) {
  const N = 7, KINDS = 6;
  const PIECE = 1, CARD_PIECE = 2, CARD_DONE = 10;

  function rng(seed) { // mulberry32
    return () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }

  function simulate(seed, needA) {
    const rand = rng(seed), pick = (n) => Math.floor(rand() * n);
    const tiles = [], g = [...Array(N)].map(() => Array(N).fill(null));
    const make = (kind, special) => { tiles.push({ id: tiles.length, kind, special: special || null }); return tiles.length - 1; };
    const kindAt = (r, c) => { const id = g[r] && g[r][c]; return id == null || tiles[id].special ? -1 : tiles[id].kind; };

    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      let k; do k = pick(KINDS); while ((c >= 2 && kindAt(r, c - 1) === k && kindAt(r, c - 2) === k) || (r >= 2 && kindAt(r - 1, c) === k && kindAt(r - 2, c) === k));
      g[r][c] = make(k);
    }
    const start = g.map((row) => row.slice());

    function runs() {
      const out = [];
      for (let r = 0; r < N; r++) for (let c = 0; c < N;) {
        const k = kindAt(r, c); let e = c + 1; while (e < N && k >= 0 && kindAt(r, e) === k) e++;
        if (k >= 0 && e - c >= 3) out.push({ kind: k, dir: 'h', cells: [...Array(e - c)].map((_, i) => [r, c + i]) });
        c = e;
      }
      for (let c = 0; c < N; c++) for (let r = 0; r < N;) {
        const k = kindAt(r, c); let e = r + 1; while (e < N && k >= 0 && kindAt(e, c) === k) e++;
        if (k >= 0 && e - r >= 3) out.push({ kind: k, dir: 'v', cells: [...Array(e - r)].map((_, i) => [r + i, c]) });
        r = e;
      }
      return out;
    }
    const swapCells = (a, b) => { const t = g[a[0]][a[1]]; g[a[0]][a[1]] = g[b[0]][b[1]]; g[b[0]][b[1]] = t; };
    function findSwap(test) {
      const found = [];
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) for (const [dr, dc] of [[0, 1], [1, 0]]) {
        const a = [r, c], b = [r + dr, c + dc]; if (b[0] >= N || b[1] >= N) continue;
        if (tiles[g[a[0]][a[1]]].special || tiles[g[b[0]][b[1]]].special) continue;
        swapCells(a, b); const rs = runs(); swapCells(a, b);
        if (test(rs, a, b)) found.push({ a, b, rs });
      }
      found.sort((x, y) => Math.max(y.a[0], y.b[0]) - Math.max(x.a[0], x.b[0])); // low on the board reads best
      return found[0];
    }

    // cards: Mom (race), Kid, Little one; a finished card is replaced straight away by a new kind
    const cards = [], slots = [];
    function deal(slot, member, kind, need, race) { const card = { id: cards.length, slot, member, kind, need, have: 0, race: !!race }; cards.push(card); slots[slot] = card; return card; }
    const freeKind = (avoid) => { let k; do k = pick(KINDS); while (avoid.includes(k)); return k; };

    let score = 0, bolts = 0, final = 1, steps = [], ev;
    const step = (name) => { ev = []; steps.push({ name, ev }); };
    const scoreNow = () => ({ score, bolts, cards: slots.map((s) => ({ id: s.id, have: s.have })) });

    // clear a set of cells: points, cards, then gravity + refill. own = from your swap/tap, not a cascade
    function clear(cells, own, extra) {
      const seen = new Set(), list = [];
      for (const [r, c] of cells) { const id = g[r][c]; if (id == null || seen.has(id)) continue; seen.add(id); list.push({ id, r, c }); }
      let pts = 0; const done = [];
      for (const p of list) {
        const t = tiles[p.id]; const card = t.special ? null : slots.find((s) => s.kind === t.kind && s.have < s.need);
        if (card) { card.have++; pts += CARD_PIECE; p.card = card.id; if (card.have === card.need) done.push(card); } else pts += PIECE;
        g[p.r][p.c] = null;
      }
      pts *= final; score += pts;
      ev.push(Object.assign({ t: 'clear', list, pts, own }, extra || {}));
      for (const card of done) {
        score += CARD_DONE * final; let raceBolt = false;
        if (card.race) { bolts++; raceBolt = true; }
        const others = slots.filter((s) => s !== card).map((s) => s.kind);
        const next = deal(card.slot, card.member, freeKind(others.concat(card.kind)), card.slot === 0 ? 5 : 6, false);
        ev.push({ t: 'cardDone', card: card.id, next: next.id, raceBolt, pts: CARD_DONE * final });
      }
      ev.push({ t: 'state', ...scoreNow() });
    }
    function gravity() {
      const moves = [];
      for (let c = 0; c < N; c++) {
        let w = N - 1;
        for (let r = N - 1; r >= 0; r--) if (g[r][c] != null) { if (r !== w) { moves.push({ id: g[r][c], c, from: r, to: w }); g[w][c] = g[r][c]; g[r][c] = null; } w--; }
        for (let k = 0; w >= 0; w--, k++) { const id = make(pick(KINDS)); g[w][c] = id; moves.push({ id, c, from: -1 - k, to: w, spawn: true }); }
      }
      if (moves.length) ev.push({ t: 'fall', moves });
    }
    function cascades() { for (let rs = runs(), i = 0; rs.length && i < 12; rs = runs(), i++) { clear(rs.flatMap((x) => x.cells), false, { cascade: true }); gravity(); } }
    function play(sw, rocketFor4) {
      swapCells(sw.a, sw.b); ev.push({ t: 'swap', a: sw.a, b: sw.b, ids: [g[sw.b[0]][sw.b[1]], g[sw.a[0]][sw.a[1]]] });
      const rs = runs(); let rocket = null;
      const four = rocketFor4 && rs.find((x) => x.cells.length === 4);
      if (four) { // the moved piece inside the run becomes the Rocket, the others fly into it
        const at = four.cells.find(([r, c]) => (r === sw.a[0] && c === sw.a[1]) || (r === sw.b[0] && c === sw.b[1]));
        const swipe = sw.a[0] === sw.b[0] ? 'h' : 'v';
        const id = make(-1, 'rocket-' + swipe); bolts++;
        clear(rs.flatMap((x) => x.cells), true, { into: at, rocket: id });
        g[at[0]][at[1]] = id; rocket = { id, at, swipe };
      } else clear(rs.flatMap((x) => x.cells), true);
      gravity(); cascades(); return rocket;
    }

    // 0. intro: the board, the cards
    step('intro');
    const s1 = findSwap((rs, a, b) => rs.length === 1 && rs[0].cells.length === 3);
    if (!s1) return null;
    deal(0, 'mom', s1.rs[0].kind, needA, true);
    deal(1, 'kid', freeKind([s1.rs[0].kind]), 6);
    deal(2, 'little', freeKind([slots[0].kind, slots[1].kind]), 6);
    ev.push({ t: 'state', ...scoreNow() });

    // 1. match 3
    step('match3'); play(s1);
    // 2. match 4 -> Rocket (+1 bolt), extra move
    const s2 = findSwap((rs) => rs.length === 1 && rs[0].cells.length === 4);
    if (!s2) return null;
    const firstA = cards[0];
    step('match4'); const rocket = play(s2, true);
    if (!rocket || g[rocket.at[0]][rocket.at[1]] !== rocket.id) return null;
    if (firstA.have >= firstA.need || cards.length !== 3) return null; // the race card must still be open
    // 3. tap the Rocket: it clears its line, finishes the race card (+10, +1 bolt)
    step('rocket');
    const line = rocket.swipe === 'v' ? [...Array(N)].map((_, r) => [r, rocket.at[1]]) : [...Array(N)].map((_, c) => [rocket.at[0], c]);
    clear(line, true, { fire: rocket.id, from: rocket.at, dir: rocket.swipe }); gravity(); cascades();
    if (firstA.have < firstA.need || bolts !== 2 || cards.length !== 4) return null; // only the race card finished
    // 4. DAD MODE: the 2 columns holding most of what your cards still need
    step('dadmode');
    const needKinds = slots.filter((s) => s.have < s.need).map((s) => s.kind);
    const colScore = [...Array(N)].map((_, c) => [...Array(N)].filter((_, r) => needKinds.includes(kindAt(r, c))).length);
    const cols = colScore.map((v, c) => [v, c]).sort((x, y) => y[0] - x[0] || x[1] - y[1]).slice(0, 2).map((x) => x[1]).sort((x, y) => x - y);
    bolts = 0;
    clear(cols.flatMap((c) => [...Array(N)].map((_, r) => [r, c])), true, { dad: cols }); gravity(); cascades();
    // 5. Mom's List Check: grabs up to 6 pieces her card still needs
    step('power');
    const mom = slots[0]; if (mom.race) return null;
    const want = Math.min(6, mom.need - mom.have);
    const grab = []; for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (kindAt(r, c) === mom.kind && grab.length < want) grab.push([r, c]);
    if (grab.length < want || want < 3) return null;
    const momCard = mom.id;
    clear(grab, true, { collect: momCard }); gravity(); cascades();
    if (cards[momCard].have < cards[momCard].need) return null;
    // 6. final round: every point x2
    step('final'); final = 2;
    const s6 = findSwap((rs) => rs.length === 1 && rs[0].cells.length === 3);
    if (!s6) return null;
    play(s6);
    step('win');
    return { seed, needA, start, tiles, steps, cards, score, N };
  }

  function findSeed(from) {
    for (let seed = from || 1; seed < 20000; seed++) for (const need of [5, 6]) { const s = simulate(seed, need); if (s) return s; }
    return null;
  }

  const api = { simulate, findSeed, N };
  if (typeof module !== 'undefined') module.exports = api; else root.FRSim = api;
  if (typeof require !== 'undefined' && typeof module !== 'undefined' && require.main === module) {
    const s = findSeed(+process.argv[2] || 1);
    if (!s) { console.log('no seed'); process.exit(1); }
    console.log('seed', s.seed, 'needA', s.needA, 'score', s.score, 'tiles', s.tiles.length);
    for (const st of s.steps) console.log(st.name, st.ev.map((e) => e.t + (e.t === 'clear' ? '(' + e.list.length + (e.cascade ? ' cascade' : '') + ')' : '')).join(' '));
    console.log('cards', s.cards.map((c) => `${c.member}:${c.kind} ${c.have}/${c.need}${c.race ? ' race' : ''}`).join(' | '));
  }
})(this);
