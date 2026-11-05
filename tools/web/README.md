# Family Rush public site

The public domain `playfamilyrush.com` is GitHub Pages, branch `main`, `/docs`.
The historical React/Sites app at the repository root is a separate application.

Build: `cd tools/web && npm ci && npm run build`.
Preview with byte-range video support: `node tools/web/preview.mjs` from the repository root.

## Direction and camera contract

The site is one scroll-driven trip down Home's road. Gameplay, family help, Dad Mode,
family selection, destinations and tester invitation appear along that trip.
Keep the camera in **LOW FILM**, using the current game source:

- `CupData/road.json`: original eye 12, back 16, vertical FOV 56, horizon .3,
  curvature .0016 along and .0026 across, follow X .35.
- `CupHomeArchPass.cs`: eye **3.8**, arch size **.75**, film holes approaching
  the eye at 18 / 5 / 2 units.
- `CupRoad3DHome.cs`: preserve the original target when lowering the eye.
- `CupHomeTrackRoad.cs`: 5.8 tile step, 4.4 section gap, 15-tile zig,
  yellow/blue podiums and 3.4-high Dad. A wider browser changes aspect only.

No angled showcase camera, camera orbit, camera bob or FOV animation on the road.
Parallax comes from perspective travel, world geometry and the story layers.

## Sources

`asset-manifest.json` records original FBX-to-GLB sources, hashes and geometry/pose QA.
Original geometry, rigs, painted vertex colours and animation cuts are retained.
The site uses Three.js toon materials; this is an adaptation of the game shading.

`latest-art-manifest.json` records the **5 November final happy family artwork**,
from `DadLineFamilyCup/Design/images/family_happy_5nov/final`, without grandparents.
Do not replace these with stale `CupArt/families/*_lineup.png` exports.
Only the nine families with actual current 3D Dads are selectable on the road.

Current match and Dad Mode footage comes from the 5 November `powerups210/owl_video`
capture in `FamilyRush-newdads`, trimmed/resized without sound. It is development
footage. No public store availability is asserted. The tester CTA remains email.

One renderer, pooled/instanced street props, lazy Dad models, capped pixel ratio,
30/45 FPS animation admission, off-tab suspension and reduced-motion handling.
Video loads only in its scene and pauses when the scene leaves. Native controls
are supplemented by explicit keyboard-accessible video buttons.
