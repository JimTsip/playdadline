import * as T from "three";

// Port of the current CupRoadSoftCel / CupDadCel shaders. Keep the game's
// stepped sunlight, low-contrast shadows and colour-tinted silhouette ink.
const vertexShader = `
#include <common>
#include <batching_pars_vertex>
#include <color_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <fog_pars_vertex>
uniform float inkWidth;
uniform float inkPush;
uniform float inkFade;
varying vec3 celNormal;
varying vec3 celView;
void main() {
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #ifdef FLIP_SIDED
    transformedNormal = -transformedNormal;
  #endif
  celNormal = transformedNormal;
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  celView = -mvPosition.xyz;
  if (inkWidth > 0.0) {
    // Push along the whole eye ray, so close hands do not acquire an offset
    // shadow. Width is a share of viewport height, as in the Unity shader.
    vec4 p = projectionMatrix * vec4(mvPosition.xyz * (1.0 + inkPush), 1.0);
    vec2 dir = normalize(vec2(projectionMatrix[0][0], projectionMatrix[1][1])
      * transformedNormal.xy + vec2(0.00001));
    dir.x *= projectionMatrix[0][0] / projectionMatrix[1][1];
    float width = inkWidth * inkFade / (inkFade + max(0.0, -mvPosition.z));
    p.xy += dir * width * 2.0 * p.w;
    gl_Position = p;
  }
  #include <fog_vertex>
}`;

const fragmentShader = `
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
uniform bool dad;
uniform bool ink;
varying vec3 celNormal;
varying vec3 celView;
void main() {
  vec4 diffuseColor = vec4(1.0);
  #include <color_fragment>
  vec3 c = diffuseColor.rgb;
  vec3 n = inverseTransformDirection(normalize(celNormal), viewMatrix);
  vec3 v = inverseTransformDirection(normalize(celView), viewMatrix);
  vec3 s = normalize(vec3(-0.36, 0.8, 0.48));
  vec3 col;
  if (ink) {
    col = dad ? mix(vec3(0.07, 0.08, 0.2), c * 0.32 * vec3(0.07, 0.08, 0.2) * 3.0, 0.7)
              : mix(vec3(0.07, 0.08, 0.2), c * 0.6, 0.92);
  } else {
    float t = dot(n, s) * 0.5 + 0.5;
    if (dad) {
      c = clamp(mix(vec3(dot(c, vec3(0.299, 0.587, 0.114))), c, 1.22), 0.0, 1.0);
      float a = smoothstep(0.355, 0.405, t);
      float b = smoothstep(0.695, 0.745, t);
      vec3 light = mix(0.77 * vec3(0.78, 0.84, 1.06), vec3(0.92), a);
      light = mix(light, vec3(1.0), b);
      float rim = smoothstep(0.54, 0.78, 1.0 - clamp(dot(n, v), 0.0, 1.0)) * 0.2 * a;
      col = clamp(c * light + rim * vec3(1.0, 0.97, 0.9), 0.0, 1.0);
    } else {
      float sunlight = smoothstep(0.31, 0.37, t) * 0.55
                     + smoothstep(0.65, 0.71, t) * 0.45;
      sunlight = mix(0.4, 1.0, sunlight);
      vec3 sky = vec3(0.62, 0.67, 0.74);
      vec3 hemi = mix(vec3(0.56, 0.48, 0.47), sky, n.y * 0.5 + 0.5);
      col = c * (hemi + vec3(0.56, 0.53, 0.47) * sunlight);
      float spec = smoothstep(0.93, 0.97, clamp(dot(n, normalize(s + v)), 0.0, 1.0)) * diffuseColor.a * 0.12;
      float rim = smoothstep(0.55, 0.8, 1.0 - clamp(dot(n, v), 0.0, 1.0)) * clamp(n.y * 0.6 + 0.5, 0.0, 1.0) * 0.1;
      col += spec + rim * sky;
    }
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

export function celMaterial({ dad = false, ink = false } = {}) {
  return new T.ShaderMaterial({
    name: dad ? "CupDadCel" : "CupRoadSoftCel",
    vertexColors: true,
    fog: true,
    side: ink ? T.BackSide : T.FrontSide,
    uniforms: T.UniformsUtils.merge([
      T.UniformsLib.fog,
      {
        dad: { value: dad },
        ink: { value: ink },
        inkWidth: { value: ink ? (dad ? 0.0018 : 0.001) : 0 },
        inkPush: { value: dad ? 0.012 : 0.01 },
        inkFade: { value: dad ? 100000 : 26 },
      },
    ]),
    vertexShader,
    fragmentShader,
  });
}

export function addCelOutline(mesh, material) {
  let outline;
  if (mesh.isSkinnedMesh) {
    outline = new T.SkinnedMesh(mesh.geometry, material);
    outline.bindMode = mesh.bindMode;
    outline.bind(mesh.skeleton, mesh.bindMatrix);
    outline.bindMatrixInverse.copy(mesh.bindMatrixInverse);
  } else if (mesh.isInstancedMesh) {
    outline = new T.InstancedMesh(mesh.geometry, material, mesh.count);
    outline.instanceMatrix = mesh.instanceMatrix;
  } else outline = new T.Mesh(mesh.geometry, material);
  outline.name = "Cel silhouette ink";
  outline.frustumCulled = false;
  mesh.add(outline);
  return outline;
}
