# Family Rush public site

The public domain `playfamilyrush.com` is GitHub Pages, branch `main`, `/docs`.
The historical React/Sites app at the repository root is a separate application.

Build: `cd tools/web && npm ci && npm run build`.
Preview with byte-range video support: `node tools/web/preview.mjs` from the repository root.

## Direction and camera contract

The current story starts inside a phone: real match footage explains the shared
board and six-crest Dad Mode charge. The phone expands into a live fullscreen
first-person Dad Mode preview, shrinks back into the match, then leaves the scene.
Family help, eight common Dad Mode powers, family rivalry and a tester invitation
follow. Scroll manually, use Next Moment or play the 29-second guided sequence.

The live run uses the current `CupRoad3D` Dad Mode camera: eye 3, vertical FOV 74,
near .1, curve .0009 along/across, and the source horizon aim. The actual current
camera-local arm rig uses position (0,0,-.9), +10-degree pitch and scale 3. Browser
aspect widens the same view. Do not replace it with an orbit or visible Dad back.

The palette and typography come from the actual editable game screens in
`family-cup.pen`: O8G5m, mIKbg, G61aN, litwZ and Lptjs. Character reference-sheet
beige is not a game UI colour. Native navy/blue, gold, white and green buttons are
retained; no independently invented marketing palette.

## Sources

`asset-manifest.json` records original FBX-to-GLB sources, hashes and geometry/pose QA.
Original geometry, rigs, painted vertex colours and animation cuts are retained.
`cel-material.js` applies `CupDadCel`-based three-band sunlight across the whole
solid scene: arms, road/pavement/grass, lane markings, houses, trees, fences and
lampposts. The earlier SoftCel ambient fill washed out the environment's bands;
the environment now shares the Dad's discrete lighting, preserving painted
colours, with restrained rim and readable colour-tinted silhouette ink.
Skinned arms share the original skeleton; street outlines share instance buffers.
The ink narrows with distance. Street assets must all load before the preview is
marked ready; failures use the recorded fallback. This is a web adaptation, not a Unity renderer.
Recorded video retains its captured shading.

`native-art-manifest.json` records the native UI artwork and source hashes, plus
the official unmodified The Last Click logo used in the footer. `arms-qa.json`
records the camera-local arm export and source animation/geometry comparison.

`latest-art-manifest.json` records the **5 November final happy family artwork**,
from `DadLineFamilyCup/Design/images/family_happy_5nov/final`, without grandparents.
Do not replace these with stale `CupArt/families/*_lineup.png` exports.
The nine supported families are selectable in the rivalry presentation.

Current match and Dad Mode footage comes from the 5 November `powerups210/owl_video`
capture in `FamilyRush-newdads`, trimmed/resized without sound. Power demos use
the same build's eight captured power videos and load only on selection. This is
development footage. PvP is described as planned for launch, not verified online
play in this demo. No public store availability is asserted. Tester CTA is email.

One lazy renderer, pooled/instanced street props, capped pixel ratio,
30/45 FPS animation admission, off-tab suspension and reduced-motion handling.
Video loads only in its scene and pauses when the scene leaves. Explicit
keyboard-accessible video buttons control playback.
