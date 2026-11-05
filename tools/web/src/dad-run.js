import * as T from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { celMaterial, addCelOutline } from "./cel-material.js";

// A full-viewport animated preview, built from the real game meshes and rig.
// Dad Mode uses the actual first-person run camera and camera-local arms.
export async function createDadRun(canvas) {
  const renderer = new T.WebGLRenderer({
    canvas,
    alpha: false,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.setPixelRatio(
    Math.min(devicePixelRatio, innerWidth < 700 ? 1.3 : 1.6),
  );
  renderer.setClearColor(0x55c5fc, 1);
  const scene = new T.Scene();
  scene.fog = new T.Fog("#b5e6ff", 65, 120);
  const camera = new T.PerspectiveCamera(74, 1, 0.1, 170);
  camera.position.set(0, 3, 16);
  scene.add(camera);
  const runTilt =
    Math.atan(2 * 0.0009 * Math.sqrt(3 / 0.0009)) +
    Math.atan((0.5 - 250 / 1311) * 2 * Math.tan(T.MathUtils.degToRad(74) / 2));
  camera.lookAt(0, 3 - Math.tan(runTilt) * 100, -84);
  scene.add(new T.HemisphereLight(0xfff7df, 0x93a3bb, 1.35));
  const sun = new T.DirectionalLight(0xfff4da, 1.7);
  sun.position.set(-10, 20, 14);
  scene.add(sun);
  const loader = new GLTFLoader(),
    load = (n) => loader.loadAsync(`/assets/fr3d/models/${n}.glb`);
  const roadMaterial = celMaterial();
  const roadInk = celMaterial({ ink: true });
  const armMaterial = celMaterial({ dad: true });
  const armInk = celMaterial({ dad: true, ink: true });
  const bend = (x, z) => -0.0009 * (z - 16) ** 2 - 0.0009 * x * x;
  const pos = [],
    col = [],
    indices = [];
  for (const [x1, x2, hex] of [
    [-90, -6.42, 0x8bd564],
    [-6.42, -4.12, 0xf5ebc9],
    [-4.12, -3.7, 0xfff7e8],
    [-3.7, 3.7, 0x515e80],
    [3.7, 4.12, 0xfff7e8],
    [4.12, 6.42, 0xf5ebc9],
    [6.42, 90, 0x8bd564],
  ]) {
    const base = pos.length / 3,
      c = new T.Color(hex);
    for (let i = 0; i <= 90; i++) {
      const z = 30 - i * 1.9;
      for (const x of [x1, x2]) {
        pos.push(x, bend(x, z), z);
        col.push(c.r, c.g, c.b);
      }
    }
    for (let i = 0; i < 90; i++) {
      const j = base + i * 2;
      indices.push(j, j + 1, j + 2, j + 1, j + 3, j + 2);
    }
  }
  const ground = new T.BufferGeometry();
  ground.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
  ground.setAttribute("color", new T.Float32BufferAttribute(col, 3));
  ground.setIndex(indices);
  ground.computeVertexNormals();
  scene.add(new T.Mesh(ground, roadMaterial));
  const skyMap = new T.TextureLoader().load("/assets/fr3d/sky.jpg");
  skyMap.colorSpace = T.SRGBColorSpace;
  const sky = new T.Mesh(
    new T.SphereGeometry(150, 32, 16),
    new T.MeshBasicMaterial({
      map: skyMap,
      side: T.BackSide,
      fog: false,
      depthWrite: false,
    }),
  );
  sky.position.y = 25;
  sky.rotation.y = -0.5;
  sky.renderOrder = -2;
  scene.add(sky);
  const groups = [],
    scratch = new T.Object3D();
  function merge(g) {
    const parts = [];
    g.scene.updateMatrixWorld(true);
    g.scene.traverse((o) => {
      if (!o.isMesh) return;
      let geo = o.geometry.clone().applyMatrix4(o.matrixWorld);
      if (geo.index) geo = geo.toNonIndexed();
      for (const a of Object.keys(geo.attributes))
        if (!["position", "normal", "color"].includes(a))
          geo.deleteAttribute(a);
      if (!geo.attributes.color) {
        const c = new Float32Array(geo.attributes.position.count * 3);
        c.fill(1);
        geo.setAttribute("color", new T.BufferAttribute(c, 3));
      }
      parts.push(geo);
    });
    return mergeGeometries(parts);
  }
  async function street(name, height, gap, x, offset, rotation) {
    const g = merge(await load("prop-" + name));
    g.computeBoundingBox();
    const box = g.boundingBox,
      center = box.getCenter(new T.Vector3()),
      scale = height / (box.max.y - box.min.y);
    g.translate(-center.x, -box.min.y, -center.z);
    g.scale(scale, scale, scale);
    const mesh = new T.InstancedMesh(g, roadMaterial, 30);
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
    scene.add(mesh);
    addCelOutline(mesh, roadInk);
    groups.push({ mesh, gap, x, offset, rotation });
  }
  const streetTasks = [];
  for (const side of [-1, 1]) {
    streetTasks.push(
      street("tree", 5.5, 12, side * 6.4, side === 1 ? 4 : 0, 0),
      street("lamppost", 4.5, 21, side * 4.7, 8, 0),
      street("fence", 1.3, 5.2, side * 7.3, 0, 0),
      street(
        "house-a",
        7.5,
        35,
        side * 13,
        0,
        side === 1 ? -Math.PI / 2 : Math.PI / 2,
      ),
      street(
        "house-b",
        7,
        35,
        side * 13,
        17,
        side === 1 ? -Math.PI / 2 : Math.PI / 2,
      ),
    );
  }
  Promise.allSettled(streetTasks).then(() => {});
  const dash = new T.InstancedMesh(
    new T.BoxGeometry(0.12, 0.03, 1.4),
    new T.MeshBasicMaterial({ color: 0xfff8e5 }),
    100,
  );
  dash.frustumCulled = false;
  scene.add(dash);
  const g = await load("arms-weekenders"),
    arms = g.scene;
  arms.rotation.y = Math.PI;
  const armMeshes = [];
  arms.traverse((o) => {
    if (o.isMesh) {
      o.material = armMaterial;
      o.frustumCulled = false;
      armMeshes.push(o);
    }
  });
  armMeshes.forEach((o) => addCelOutline(o, armInk));
  const armAnchor = new T.Group();
  armAnchor.position.set(0, 0, -0.9);
  armAnchor.rotation.x = T.MathUtils.degToRad(10);
  armAnchor.scale.setScalar(3);
  armAnchor.add(arms);
  camera.add(armAnchor);
  const mixer = new T.AnimationMixer(arms),
    run = mixer.clipAction(T.AnimationClip.findByName(g.animations, "Run")),
    ready = mixer.clipAction(T.AnimationClip.findByName(g.animations, "Ready"));
  run.play();
  ready.play();
  run.setEffectiveWeight(1);
  ready.setEffectiveWeight(0);
  const pieces = [];
  const tl = new T.TextureLoader();
  for (let i = 0; i < 16; i++) {
    const map = tl.load(
      "/assets/fr3d/items/" +
        ["strawberry", "apple", "banana", "milk"][i % 4] +
        ".webp",
    );
    map.colorSpace = T.SRGBColorSpace;
    const sprite = new T.Sprite(
      new T.SpriteMaterial({ map, depthWrite: false }),
    );
    sprite.scale.setScalar(1.5);
    scene.add(sprite);
    pieces.push(sprite);
  }
  let last = 0,
    clock = 0,
    width = 0,
    height = 0,
    lost = false;
  canvas.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    lost = true;
    canvas.dispatchEvent(new CustomEvent("preview-unavailable"));
  });
  return {
    render(progress, time, paused = false) {
      if (lost) return;
      const r = canvas.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return;
      const dt = Math.min((time - last) / 1000 || 0, 0.04);
      last = time;
      if (!paused) clock += dt;
      if (Math.abs(width - r.width) > 2 || Math.abs(height - r.height) > 2) {
        width = r.width;
        height = r.height;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
      const travel = progress * 100 + (paused ? 0 : clock * 18);
      run.setEffectiveWeight(paused ? 0 : 1);
      ready.setEffectiveWeight(paused ? 1 : 0);
      mixer.setTime(paused ? 0 : clock);
      for (const pool of groups) {
        const offset = (travel + pool.offset) % pool.gap;
        for (let i = 0; i < 30; i++) {
          const z = 27 - i * pool.gap + offset;
          scratch.position.set(pool.x, bend(pool.x, z), z);
          scratch.rotation.set(Math.atan(-0.0018 * (z - 16)), pool.rotation, 0);
          scratch.scale.set(1, 1, 1);
          scratch.updateMatrix();
          pool.mesh.setMatrixAt(i, scratch.matrix);
        }
        pool.mesh.instanceMatrix.needsUpdate = true;
      }
      for (let i = 0; i < 100; i++) {
        const z = 28 - Math.floor(i / 2) * 4.8 + (travel % 4.8);
        scratch.position.set(i % 2 ? -1.25 : 1.25, bend(0, z) + 0.035, z);
        scratch.rotation.set(0, 0, 0);
        scratch.scale.set(1, 1, 1);
        scratch.updateMatrix();
        dash.setMatrixAt(i, scratch.matrix);
      }
      dash.instanceMatrix.needsUpdate = true;
      pieces.forEach((o, i) => {
        const z = 22 - i * 6.5 + (travel % 104);
        o.position.set(
          ((i % 3) - 1) * 2,
          bend(0, z) + 1.25 + (paused ? 0 : Math.sin(clock * 2 + i) * 0.1),
          z,
        );
        o.visible = z < 3 && z > -90;
      });
      renderer.render(scene, camera);
    },
    dispose() {
      renderer.dispose();
    },
  };
}
