import * as T from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { clone } from "three/addons/utils/SkeletonUtils.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)],
  media = matchMedia("(prefers-reduced-motion: reduce)");
const panels = $$(".chapter"),
  ids = panels.map((p) => p.id),
  stops = [0, 0.155, 0.315, 0.465, 0.615, 0.785, 0.955];
const families = [
  [
    "weekenders",
    "Weekenders",
    "The everyday all-stars. A little chaotic, always up for an adventure, and better together.",
  ],
  [
    "bakers",
    "Bakers",
    "Fresh out of the oven and ready for anything. The Bakers bring a generous helping of family spirit.",
  ],
  [
    "sprinters",
    "Sprinters",
    "Always on the move. A sporty crew with a spring in their step and their eyes on the next big match.",
  ],
  [
    "campbells",
    "Campbells",
    "The great outdoors is calling. Pack the essentials, bring the whole family and take the scenic route.",
  ],
  [
    "sunnyfields",
    "Sunnyfields",
    "A little sunshine goes a long way. This cheerful crew brings countryside charm to the competition.",
  ],
  [
    "rockwells",
    "Rockwells",
    "Turn up the family energy. Big personalities, good company and a little rock-and-roll spirit.",
  ],
  [
    "nakamuras",
    "Nakamuras",
    "Helmets on. Family together. A fresh adventure is always just around the next corner.",
  ],
  [
    "papadopoulos",
    "Papadopoulos",
    "A favourite cap and plenty of family spirit. This crew is ready to make a splash.",
  ],
  [
    "okafors",
    "Okafors",
    "Colour, character and a whole lot of rhythm. Meet a family that brings its own unmistakable energy.",
  ],
];
const loader = new GLTFLoader(),
  modelCache = new Map();
let selected = 0,
  modelRequest = 0,
  active = 0,
  paused = media.matches,
  frame = 0,
  lastTime = 0,
  scrollSpeed = 0,
  prevDistance = 0,
  elapsed = 0,
  boostAt = -100,
  loadReady = false;
let renderer,
  scene,
  camera,
  dad,
  dadMixer,
  idleAction,
  hopAction,
  waveAction,
  skySphere;
const journey = { progress: 0 },
  crowd = [],
  pools = [],
  gates = [],
  decor = [],
  coins = [],
  colors = { sky: new T.Color("#53bcf5"), fog: new T.Color("#b7e6f5") };
const scratch = new T.Object3D(),
  look = new T.Vector3(),
  camTarget = new T.Vector3(),
  camPos = new T.Vector3();
const rivalStops = [
  ["bakers", 72, -1.9],
  ["sprinters", 109, 1.9],
  ["rockwells", 166, -1.9],
  ["nakamuras", 218, 1.9],
  ["papadopoulos", 279, -1.9],
  ["okafors", 316, 1.9],
  ["sunnyfields", 356, -1.9],
  ["campbells", 403, 1.9],
].map(([key, z, x]) => ({ key, z, x, requested: false }));
const maxDistance = 382,
  step = 5.8,
  zig = [0, 0, 1, 1, 0, -1, -1, 0, 0, 1, 0, -1, 0, 1, 0];
const matYellow = new T.MeshToonMaterial({ color: 0xffffff }),
  matBlue = new T.MeshToonMaterial({ color: 0x204dcc }),
  matDone = new T.MeshToonMaterial({ color: 0x56a7ff });
const grad = new T.DataTexture(
  new Uint8Array([135, 215, 255]),
  3,
  1,
  T.RedFormat,
);
grad.minFilter = grad.magFilter = T.NearestFilter;
grad.needsUpdate = true;
function material(vertexColors = true, color = 0xffffff) {
  return new T.MeshToonMaterial({ color, vertexColors, gradientMap: grad });
}
function load(name) {
  if (!modelCache.has(name))
    modelCache.set(
      name,
      loader.loadAsync(`/assets/fr3d/models/${name}.glb`).catch((e) => {
        modelCache.delete(name);
        throw e;
      }),
    );
  return modelCache.get(name);
}
function instance(g) {
  const root = clone(g.scene);
  root.traverse((o) => {
    if (!o.isMesh) return;
    o.material = material(!!o.geometry.attributes.color);
    o.frustumCulled = false;
  });
  return root;
}
function gy(x, z) {
  return -0.0016 * (z - 16) * (z - 16) - 0.0026 * x * x;
}
function tileZ(i) {
  return i * step + Math.floor(i / 15) * 4.4;
}
function tileX(i) {
  return zig[((i % 15) + 15) % 15] * 1.9 * (Math.floor(i / 15) % 2 ? -1 : 1);
}
function nearestTile(z) {
  let i = Math.max(0, Math.floor(z / step));
  while (tileZ(i) > z) i--;
  while (tileZ(i + 1) <= z) i++;
  return Math.abs(tileZ(i + 1) - z) < Math.abs(tileZ(i) - z) ? i + 1 : i;
}
let travel = 0,
  lastInputAt = -10000;

function clamp(x, a = 0, b = 1) {
  return Math.min(b, Math.max(a, x));
}
function smooth(a, b, t) {
  t = clamp((t - a) / (b - a));
  return t * t * (3 - 2 * t);
}
function initStory() {
  panels.forEach((el, i) => {
    el.setAttribute("aria-hidden", i ? "true" : "false");
    el.inert = i !== 0;
  });
  $$('a[href^="#story-"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      const idx = ids.indexOf(a.hash.slice(1));
      if (idx < 0) return;
      e.preventDefault();
      go(idx);
    }),
  );
  families.forEach((f, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = f[1];
    b.setAttribute("aria-pressed", String(i === 0));
    b.addEventListener("click", () => selectFamily(i));
    $(".family-choices").append(b);
  });
  $("#motion-toggle").addEventListener("click", () => {
    paused = !paused;
    syncMotion();
  });
  media.addEventListener("change", (e) => {
    paused = e.matches;
    syncMotion();
  });
  $("#boost-button").addEventListener("click", () => {
    boostAt = elapsed;
    $("#boost-status").textContent =
      "That’s the family energy! Keep the adventure moving.";
    if (!paused) {
      gsap.fromTo(
        ".speed-lines",
        { opacity: 0 },
        {
          opacity: 0.7,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          repeatDelay: 0.8,
        },
      );
      gsap.fromTo(
        ".world-shout",
        { scale: 0.8, opacity: 0.3 },
        {
          scale: 1.12,
          opacity: 1,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          repeatDelay: 0.6,
        },
      );
    }
    invalidate();
  });
  $$(".video-toggle").forEach((b) => {
    const v = b.parentElement.querySelector("video");
    b.addEventListener("click", () => {
      if (v.paused) {
        v.dataset.userPaused = "false";
        v.play().catch(() => {});
      } else {
        v.dataset.userPaused = "true";
        v.pause();
      }
    });
    v.addEventListener("play", () => {
      b.textContent = "Pause video Ⅱ";
      b.setAttribute("aria-label", "Pause gameplay video");
    });
    v.addEventListener("pause", () => {
      b.textContent = "Play video ▷";
      b.setAttribute("aria-label", "Play gameplay video");
    });
  });
  const st = ScrollTrigger.create({
    trigger: "#journey",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (s) => {
      journey.progress = s.progress;
      lastInputAt = performance.now();
      updateStory();
      invalidate();
    },
  });
  journey.progress = st.progress;
  updateStory();
  syncMotion();
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  addEventListener(
    "resize",
    () => {
      resize();
      updateStory();
      invalidate();
    },
    { passive: true },
  );
  addEventListener("scroll", invalidate, { passive: true });
  document.addEventListener("visibilitychange", () => {
    lastTime = 0;
    if (document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else invalidate();
  });
  if (location.hash && ids.includes(location.hash.slice(1)))
    go(ids.indexOf(location.hash.slice(1)), true);
}
function go(i, instant = false) {
  const y = stops[i] * (document.documentElement.scrollHeight - innerHeight);
  window.scrollTo({
    top: y,
    behavior: instant || paused ? "instant" : "smooth",
  });
}
function updateStory() {
  const p = journey.progress;
  let next = 0;
  stops.forEach((s, i) => {
    if (p >= s - 0.055) next = i;
  });
  if (next !== active) {
    active = next;
    panels.forEach((el, i) => {
      el.classList.toggle("active", i === active);
      el.setAttribute("aria-hidden", String(i !== active));
      el.inert = i !== active;
    });
    $("#chapter-count").textContent =
      `${String(active + 1).padStart(2, "0")} / 07`;
    const link = $("#next-stop");
    link.textContent = active === 6 ? "BACK TO THE START ↑" : "KEEP GOING ↓";
    link.href = "#" + ids[active === 6 ? 0 : active + 1];
  }
  panels[0].classList.toggle("active", active === 0);
  for (let i = 0; i < panels.length; i++) {
    const d = p - stops[i],
      fadeIn = i === 0 ? 1 : smooth(-0.06, -0.018, d),
      fadeOut = i === 6 ? 1 : 1 - smooth(0.075, 0.125, d),
      alpha = fadeIn * fadeOut;
    panels[i].style.opacity = alpha;
    panels[i].style.visibility = alpha > 0.001 ? "visible" : "hidden";
    panels[i].style.transform = paused
      ? "none"
      : `translate3d(0,${-d * 220}px,0)`;
  }
  $("#journey-percent").textContent =
    String(Math.round(p * 100)).padStart(2, "0") + "%";
  $(".route-line i").style.transform = `scaleX(${p})`;
  $("#place-name").textContent =
    p < 0.17
      ? "WELCOME TO SUNNY BEACH"
      : p < 0.42
        ? "NEXT STOP: THE SKI SLOPES"
        : p < 0.69
          ? "TAKE THE SCENIC ROUTE"
          : "A LITTLE POOL PARTY ENERGY";
  $$(".story-video").forEach((v) => {
    const shouldPlay =
      Number(v.dataset.sceneVideo) === active &&
      !paused &&
      v.dataset.userPaused !== "true";
    if (shouldPlay) {
      if (!v.getAttribute("src")) v.src = v.dataset.src;
      if (v.paused) v.play().catch(() => {});
    } else if (!v.paused) v.pause();
  });
  $$(".power-parade img").forEach(
    (img, i) =>
      (img.style.transform = paused
        ? "none"
        : `translate3d(0,${(p - stops[2]) * (-240 - i * 180)}px,0) rotate(${[-12, 13, -6][i] + (p - stops[2]) * 70}deg)`),
  );
  $$(".giant-piece").forEach(
    (img, i) =>
      (img.style.transform = paused
        ? "none"
        : `translateY(${(p - stops[1]) * (i ? 420 : -520)}px) rotate(${(i ? -15 : 17) + (p - stops[1]) * 100}deg)`),
  );
  const footage = $(".dad-footage");
  footage.style.transform = paused
    ? "none"
    : `translateY(${(p - stops[3]) * -250}px) rotate(${4 + (p - stops[3]) * 16}deg)`;
  const w = $(".game-window");
  w.style.transform = `translate3d(0,${paused ? 0 : (p - stops[1]) * -360}px,0) rotate(${paused ? 6 : (innerWidth < 700 ? 4 : 8) + (p - stops[1]) * 22}deg)`;
  $(".family-art").style.transform =
    `translateY(${paused ? 0 : (p - stops[4]) * -180}px)`;
}
function syncMotion() {
  document.body.classList.toggle("motion-paused", paused);
  $("#motion-toggle").textContent = paused ? "Resume motion" : "Pause motion";
  $("#motion-toggle").setAttribute("aria-pressed", String(paused));
  updateStory();
  invalidate();
}
async function selectFamily(i) {
  selected = i;
  const [key, name, copy] = families[i];
  $("#family-title").textContent = name + ".";
  $("#family-copy").textContent = copy;
  $("#family-art").src = `/assets/fr3d/families/${key}.webp`;
  $("#family-art").alt = "The " + name + " family";
  $$(".family-choices button").forEach((b, j) =>
    b.setAttribute("aria-pressed", String(i === j)),
  );
  $("#family-status").textContent = "Getting the " + name + " ready…";
  const ok = loadReady ? await swapDad(key) : false;
  if (selected !== i) return;
  $("#family-status").textContent = ok
    ? "The " + name + " are leading the way. Keep scrolling."
    : "Meet the " + name + ". Keep scrolling.";
}
function roadGeometry() {
  const pos = [],
    col = [],
    idx = [],
    bands = [
      [-100, -6.42, 0x8aca65],
      [-6.42, -4.12, 0xf4e6bc],
      [-4.12, -3.7, 0xfaffef],
      [-3.7, 3.7, 0x505e7f],
      [3.7, 4.12, 0xfaffef],
      [4.12, 6.42, 0xf4e6bc],
      [6.42, 100, 0x8aca65],
    ];
  for (const [x1, x2, hex] of bands) {
    const c = new T.Color(hex),
      base = pos.length / 3;
    for (let j = 0; j <= 100; j++) {
      const z = 30 - j * 1.9;
      for (const x of [x1, x2]) {
        pos.push(x, gy(x, z), z);
        col.push(c.r, c.g, c.b);
      }
    }
    for (let j = 0; j < 100; j++) {
      let k = base + j * 2;
      idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
  g.setAttribute("color", new T.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
function podiums() {
  const side = new T.InstancedMesh(
      new T.CylinderGeometry(1.45, 1.45, 0.78, 40),
      matBlue,
      30,
    ),
    top = new T.InstancedMesh(
      new T.CylinderGeometry(1.45, 1.45, 0.17, 40),
      matYellow,
      30,
    );
  side.instanceMatrix.setUsage(T.DynamicDrawUsage);
  top.instanceMatrix.setUsage(T.DynamicDrawUsage);
  side.frustumCulled = top.frustumCulled = false;
  scene.add(side, top);
  return { side, top };
}
let pods;
const tileLabels = [];
function labelsSetup() {
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("canvas");
    c.width = 128;
    c.height = 64;
    const map = new T.CanvasTexture(c);
    map.colorSpace = T.SRGBColorSpace;
    const root = new T.Mesh(
      new T.PlaneGeometry(1.35, 0.675),
      new T.MeshBasicMaterial({ map, transparent: true, depthWrite: false }),
    );
    scene.add(root);
    tileLabels.push({ root, c, map, index: -1 });
  }
}

function merged(gltf) {
  const parts = [];
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse((o) => {
    if (!o.isMesh) return;
    let g = o.geometry.clone().applyMatrix4(o.matrixWorld);
    if (g.index) g = g.toNonIndexed();
    for (const a of Object.keys(g.attributes))
      if (!["position", "normal", "color"].includes(a)) g.deleteAttribute(a);
    if (!g.attributes.color) {
      const a = new Float32Array(g.attributes.position.count * 3);
      a.fill(1);
      g.setAttribute("color", new T.BufferAttribute(a, 3));
    }
    if (!g.attributes.normal) g.computeVertexNormals();
    parts.push(g);
  });
  return mergeGeometries(parts);
}
async function makePool(name, entries, height) {
  const source = await load("prop-" + name),
    g = merged(source);
  g.computeBoundingBox();
  const b = g.boundingBox,
    h = b.max.y - b.min.y,
    center = (b.max.x + b.min.x) / 2;
  g.translate(-center, -b.min.y, -(b.max.z + b.min.z) / 2);
  g.scale(height / h, height / h, height / h);
  const mesh = new T.InstancedMesh(g, material(), entries.length);
  mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
  mesh.frustumCulled = false;
  scene.add(mesh);
  pools.push({ mesh, entries });
}
async function environment() {
  const arr = (gap, x, offset = 0, rot = 0) =>
    Array.from({ length: Math.ceil(520 / gap) }, (_, i) => ({
      x,
      z: i * gap - 35 + offset,
      rot,
    }));
  const tasks = [];
  for (const side of [-1, 1]) {
    tasks.push(makePool("tree", arr(12, side * 6.4, side < 0 ? 0 : 5), 5.3));
    tasks.push(
      makePool(
        "lamppost",
        arr(21, side * 4.7, 5, side > 0 ? -Math.PI / 2 : Math.PI / 2),
        4.6,
      ),
    );
    tasks.push(makePool("fence", arr(5.1, side * 7.3, 0, 0), 1.3));
    tasks.push(
      makePool(
        "bench",
        arr(40, side * 5.2, 12, side > 0 ? -Math.PI / 2 : Math.PI / 2),
        1.5,
      ),
    );
    for (let j = 0; j < 3; j++)
      tasks.push(
        makePool(
          "house-" + ["a", "b", "c"][j],
          arr(48, side * 13.3, j * 16, side > 0 ? -Math.PI / 2 : Math.PI / 2),
          7.3 + j * 0.5,
        ),
      );
  }
  tasks.push(
    makePool("palm", arr(33, 10.5, 10), 7),
    makePool("pine", arr(31, -11.4, 17), 7),
    makePool(
      "deckchair",
      [
        { x: 6, z: 50, rot: -0.4 },
        { x: 6, z: 65, rot: 0.3 },
        { x: -6, z: 355, rot: 1 },
      ],
      1.4,
    ),
    makePool(
      "snowman",
      [
        { x: 6, z: 125, rot: 0 },
        { x: -6, z: 140, rot: 0 },
        { x: 6, z: 155, rot: 0 },
      ],
      2.8,
    ),
  );
  await Promise.allSettled(tasks);
}
function canvasLabel(text, color = "#fff", bg = "#173970") {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 180;
  const ctx = c.getContext("2d");
  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.roundRect(0, 0, 1024, 180, 35);
  ctx.fill();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "95px Lilita, Arial";
  ctx.fillStyle = color;
  ctx.fillText(text, 512, 94, 920);
  const map = new T.CanvasTexture(c);
  map.colorSpace = T.SRGBColorSpace;
  const m = new T.Mesh(
    new T.PlaneGeometry(7, 1.23),
    new T.MeshBasicMaterial({ map, transparent: true, side: T.DoubleSide }),
  );
  return m;
}
async function arches() {
  for (const [key, z, label] of [
    ["beach", 48, "SUNNY BEACH"],
    ["ski", 140, "SKI SLOPES"],
    ["camping", 250, "CAMPING TRIP"],
    ["pool", 346, "POOL PARTY"],
  ]) {
    try {
      const root = instance(await load("arch-" + key));
      const b = new T.Box3().setFromObject(root),
        size = b.getSize(new T.Vector3());
      root.scale.setScalar(14 / size.x);
      const bb = new T.Box3().setFromObject(root);
      root.position.y = -bb.min.y;
      const holder = new T.Group();
      holder.add(root);
      const sign = canvasLabel(label);
      sign.position.set(0, 8.3, 1);
      holder.add(sign);
      holder.scale.setScalar(0.75);
      const films = [];
      holder.traverse((o) => {
        if (o.isMesh) {
          const u = { value: 0 };
          films.push(u);
          o.material.onBeforeCompile = (shader) => {
            shader.uniforms.uHoles = u;
            shader.fragmentShader =
              "uniform float uHoles;\n" + shader.fragmentShader;
            shader.fragmentShader = shader.fragmentShader.replace(
              "#include <clipping_planes_fragment>",
              "#include <clipping_planes_fragment>\n if(uHoles>0.0){vec2 grid=fract(gl_FragCoord.xy/5.0)-.5;float radius=uHoles<.9?sqrt(uHoles/3.14159):mix(.5352,.71,clamp((uHoles-.9)/.1,0.0,1.0));if(length(grid)<radius)discard;}",
            );
          };
          o.material.customProgramCacheKey = () => "lowfilm1";
        }
      });
      scene.add(holder);
      gates.push({ root: holder, z, films });
    } catch (e) {
      console.warn("Arch unavailable", key, e);
    }
  }
}
async function addRival(key, z, x) {
  try {
    const g = await load("dad-" + key),
      root = instance(g);
    root.scale.setScalar(3.1);
    const m = new T.AnimationMixer(root);
    m.clipAction(T.AnimationClip.findByName(g.animations, "Idle")).play();
    scene.add(root);
    const label = canvasLabel(
      families.find((f) => f[0] === key)[1].toUpperCase(),
    );
    label.scale.setScalar(0.53);
    scene.add(label);
    const tile = nearestTile(z);
    crowd.push({ root, m, z: tileZ(tile), x: tileX(tile), label });
  } catch (e) {
    console.warn("Rival unavailable", key);
  }
}
async function swapDad(key) {
  const req = ++modelRequest;
  try {
    const g = await load("dad-" + key);
    if (req !== modelRequest) return;
    const root = instance(g);
    root.scale.setScalar(3.4);
    if (dad) {
      dadMixer?.stopAllAction();
      dad.traverse((o) => {
        if (o.isMesh) {
          o.material.dispose();
          o.skeleton?.dispose();
        }
      });
      scene.remove(dad);
    }
    dad = root;
    dadMixer = new T.AnimationMixer(root);
    idleAction = dadMixer.clipAction(
      T.AnimationClip.findByName(g.animations, "Idle"),
    );
    hopAction = dadMixer.clipAction(
      T.AnimationClip.findByName(g.animations, "Hop"),
    );
    const wave = T.AnimationClip.findByName(g.animations, "Wave");
    waveAction = wave ? dadMixer.clipAction(wave) : null;
    idleAction.play();
    hopAction.play();
    hopAction.setEffectiveWeight(0);
    if (waveAction) {
      waveAction.play();
      waveAction.setEffectiveWeight(0);
    }
    scene.add(root);
    invalidate();
    return true;
  } catch (e) {
    console.warn("Dad model unavailable", e);
    return false;
  }
}
function coinsSetup() {
  const geo = new T.CylinderGeometry(0.37, 0.37, 0.12, 16);
  geo.rotateX(Math.PI / 2);
  const mat = new T.MeshToonMaterial({ color: 0xffdb2f });
  for (let i = 0; i < 38; i++) {
    const root = new T.Mesh(geo, mat);
    scene.add(root);
    coins.push({
      root,
      z: 28 + i * 9.8,
      x: ((i % 3) - 1) * 1.5,
      phase: i * 0.7,
    });
  }
}
function resize() {
  if (!renderer) return;
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(
    Math.min(devicePixelRatio, innerWidth < 700 ? 1.25 : 1.6),
  );
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
}
function invalidate() {
  if (!frame && !document.hidden) frame = requestAnimationFrame(render);
}
function render(time) {
  frame = 0;
  if (!renderer || document.hidden) return;
  if (!paused && time - lastTime < 1000 / (innerWidth < 700 ? 30 : 45)) {
    frame = requestAnimationFrame(render);
    return;
  }
  const dt = Math.min((time - lastTime) / 1000 || 0, 0.04);
  lastTime = time;
  elapsed += dt;
  const p = journey.progress,
    raw = p * maxDistance;
  const target =
    paused || time - lastInputAt > 150 ? tileZ(nearestTile(raw)) : raw;
  travel = paused ? target : T.MathUtils.damp(travel, target, 9, dt);
  if (Math.abs(travel - target) < 0.001) travel = target;
  const dist = travel;
  for (const r of rivalStops) {
    if (!r.requested && r.z - dist < 130) {
      r.requested = true;
      addRival(r.key, r.z, r.x);
    }
  }
  const delta = dist - prevDistance;
  prevDistance = dist;
  scrollSpeed = T.MathUtils.lerp(
    scrollSpeed,
    dt ? Math.abs(delta) / dt : 0,
    0.12,
  );
  const isMoving = scrollSpeed > 1 && !paused;
  const boost = !paused ? Math.max(0, 1 - (elapsed - boostAt) / 1.8) : 0;
  let tile = Math.floor(dist / step);
  while (tileZ(tile) > dist) tile--;
  while (tileZ(tile + 1) <= dist) tile++;
  const f = clamp((dist - tileZ(tile)) / (tileZ(tile + 1) - tileZ(tile))),
    ease = f * f * (3 - 2 * f);
  const x = T.MathUtils.lerp(tileX(tile), tileX(tile + 1), ease),
    hop = paused ? 0 : Math.sin(f * Math.PI) * 1.4;
  // The same Home pitch, three-lane zig and little-planet curvature, with a continuous camera follow.
  const arrival = smooth(0.91, 0.99, p);
  // Read directly from CupData/road.json + BuildHome: homeEye 12, homeBack 16,
  // homeFov 56, homeHorizon .3, curvature .0016 / .0026. LOW FILM
  // EyeLow 3.8, preserves the original aim, LowArch .75. Wider aspect only.
  const followX = x * 0.35;
  const crest = Math.sqrt(12 / 0.0016),
    crestAngle = Math.atan(2 * 0.0016 * crest);
  const tilt =
    crestAngle +
    Math.atan((0.5 - 0.3) * 2 * Math.tan(T.MathUtils.degToRad(56) / 2));
  const eye = 3.8;
  camera.position.set(followX, eye, 16);
  const originalAim = 12 / Math.tan(tilt);
  const lowTilt = Math.atan(eye / originalAim);
  look.set(followX, eye - Math.tan(lowTilt) * 100, 16 - 100);
  camera.lookAt(look);
  if (dad) {
    dad.position.set(
      x,
      gy(x, 0) + 0.9 + hop + boost * Math.sin(elapsed * 9) * 0.15,
      0,
    );
    const yaw = isMoving
      ? Math.PI -
        Math.atan2(tileX(tile + 1) - tileX(tile), tileZ(tile + 1) - tileZ(tile))
      : 0.489;
    dad.rotation.y +=
      Math.atan2(
        Math.sin(yaw - dad.rotation.y),
        Math.cos(yaw - dad.rotation.y),
      ) * (paused ? 1 : Math.min(1, dt * 10));
    const h = isMoving ? 0.95 : 0;
    hopAction.setEffectiveWeight(h);
    idleAction.setEffectiveWeight(arrival > 0.7 && waveAction ? 0 : 1 - h);
    if (waveAction) waveAction.setEffectiveWeight(arrival > 0.7 ? 1 : 0);
    if (paused) {
      idleAction.setEffectiveWeight(1);
      hopAction.setEffectiveWeight(0);
      waveAction?.setEffectiveWeight(0);
      dadMixer.setTime(3);
    } else {
      if (isMoving) {
        hopAction.time = f * hopAction.getClip().duration;
      }
      dadMixer.update(isMoving ? 0 : dt);
    }
  }
  let k = 0;
  for (let i = Math.max(0, tile - 6); i < tile + 25; i++) {
    const z = tileZ(i) - dist;
    if (z < -25 || z > 135) continue;
    const tx = tileX(i),
      y = gy(tx, -z);
    scratch.position.set(tx, y + 0.39, -z);
    scratch.rotation.set(0, 0, 0);
    scratch.scale.set(1, 1, 1);
    scratch.updateMatrix();
    pods.side.setMatrixAt(k, scratch.matrix);
    scratch.position.y = y + 0.86;
    scratch.updateMatrix();
    pods.top.setMatrixAt(k, scratch.matrix);
    pods.top.setColorAt(k, new T.Color(i < tile ? 0x63aaff : 0xffd731));
    const label = tileLabels[k];
    if (label.index !== i) {
      const ctx = label.c.getContext("2d");
      ctx.clearRect(0, 0, 128, 64);
      ctx.font = "52px Lilita,Arial";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(i + 1), 64, 36);
      label.map.needsUpdate = true;
      label.index = i;
    }
    label.root.visible = true;
    label.root.position.set(tx, y + 0.39, -z + 1.46);
    k++;
  }
  for (let j = k; j < tileLabels.length; j++)
    tileLabels[j].root.visible = false;
  pods.side.count = pods.top.count = k;
  pods.side.instanceMatrix.needsUpdate =
    pods.top.instanceMatrix.needsUpdate = true;
  if (pods.top.instanceColor) pods.top.instanceColor.needsUpdate = true;
  for (const pool of pools) {
    let n = 0;
    for (const e of pool.entries) {
      const z = e.z - dist;
      if (z < -30 || z > 135) continue;
      scratch.position.set(e.x, gy(e.x, -z), -z);
      scratch.rotation.set(Math.atan(-0.0032 * (-z - 16)), e.rot || 0, 0);
      scratch.scale.set(1, 1, 1);
      scratch.updateMatrix();
      pool.mesh.setMatrixAt(n++, scratch.matrix);
    }
    pool.mesh.count = n;
    pool.mesh.instanceMatrix.needsUpdate = true;
  }
  for (const g of gates) {
    const z = g.z - dist,
      d = z + 16;
    g.root.visible = d > 1 && z < 135;
    const holes = 0.9 * (1 - smooth(5, 18, d)) + 0.1 * (1 - smooth(2, 5, d));
    g.films.forEach((u) => (u.value = holes));
    if (g.root.visible) {
      g.root.position.set(0, gy(0, -z), -z);
      g.root.rotation.x = Math.atan(-0.0032 * (-z - 16));
    }
  }
  for (const r of crowd) {
    const z = r.z - dist;
    r.root.visible = r.label.visible =
      z > -25 && z < 110 && Math.abs(z) > step * 1.15;
    if (r.root.visible) {
      r.root.position.set(r.x, gy(r.x, -z) + 0.9, -z);
      r.root.rotation.y = 0.489;
      r.label.position.set(r.x, gy(r.x, -z) + 1.05, -z + 1.6);
      if (!paused) r.m.update(dt);
    }
  }
  for (const c of coins) {
    const z = c.z - dist;
    c.root.visible = z > 5 && z < 100;
    if (c.root.visible) {
      c.root.position.set(
        c.x,
        gy(c.x, -z) + 2 + (paused ? 0 : Math.sin(elapsed * 2 + c.phase) * 0.16),
        -z,
      );
      if (!paused) c.root.rotation.y = elapsed + c.phase;
    }
  }
  const sunset = smooth(0.39, 0.48, p) * (1 - smooth(0.55, 0.63, p));
  scene.fog.color.set("#b4e6f7").lerp(new T.Color("#cebeeb"), sunset);
  if (skySphere) {
    skySphere.rotation.y = -0.5 + p * 0.12;
    skySphere.material.color.setRGB(
      1 - sunset * 0.15,
      1 - sunset * 0.22,
      1 - sunset * 0.04,
    );
  }
  renderer.render(scene, camera);
  if (!paused && (isMoving || !paused)) frame = requestAnimationFrame(render);
}
async function boot() {
  try {
    renderer = new T.WebGLRenderer({
      canvas: $("#road-canvas"),
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.outputColorSpace = T.SRGBColorSpace;
    renderer.setClearColor(0x5fc7fb, 1);
    scene = new T.Scene();
    scene.fog = new T.Fog("#b4e6f7", 72, 122);
    camera = new T.PerspectiveCamera(56, innerWidth / innerHeight, 0.1, 200);
    scene.add(new T.HemisphereLight(0xfff5df, 0x8295ac, 1.25));
    const sun = new T.DirectionalLight(0xfff5e2, 1.6);
    sun.position.set(-15, 28, 18);
    scene.add(sun);
    scene.add(new T.Mesh(roadGeometry(), material()));
    pods = podiums();
    labelsSetup();
    resize();
    coinsSetup();
    const texture = new T.TextureLoader().load("/assets/fr3d/sky.jpg", () =>
      invalidate(),
    );
    texture.colorSpace = T.SRGBColorSpace;
    skySphere = new T.Mesh(
      new T.SphereGeometry(155, 40, 20),
      new T.MeshBasicMaterial({
        map: texture,
        side: T.BackSide,
        fog: false,
        depthWrite: false,
      }),
    );
    skySphere.position.y = 25;
    skySphere.renderOrder = -2;
    scene.add(skySphere);
    await swapDad(families[selected][0]);
    loadReady = true;
    document.body.classList.add("webgl-ready");
    $("#loading-note").textContent = "";
    invalidate();
    environment().then(invalidate);
    arches().then(invalidate);
    renderer.domElement.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      loadReady = false;
      cancelAnimationFrame(frame);
      frame = 0;
      renderer = null;
      document.body.classList.remove("webgl-ready");
      $("#loading-note").textContent = "The journey continues in pictures.";
    });
  } catch (e) {
    console.warn("Showing original game artwork as fallback.", e);
    $("#loading-note").textContent = "Follow the Family Rush story ↓";
    $("#loading-note").style.opacity = "0";
  }
}
initStory();
boot();
