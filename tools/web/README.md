# Family Rush public site

Official deployment: GitHub Pages, `main:/docs`, `playfamilyrush.com`. The historical root React/Sites app is separate.

- Build: `npm run build --prefix tools/web`
- Validate shipped assets and anchors: `node tools/web/validate.mjs`
- Preview with byte-range video support: `node tools/web/preview.mjs` (port8766)
- Format source: `npm run format --prefix tools/web`

## 6 November redesign

A continuous navy world, bold white/gold typography interleaved with real character art and current Pencil screens. GSAP scrub moves separate type/art layers through every chapter. The page contains hero, Classic duel→Dad Mode→return, Knockout Sprint, family/power selectors, cup/mode progression, an interactive last puzzle piece, ranks/tournaments/daily gifts, tester invitation and the official The Last Click footer logo.

`PEN-RULES-20261106.md` documents the current rules and the ten Sprint/progression references. Additional studied boards:

| Node   | Interpretation used                                                                                                                          |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| BblNZ  | Historical list-style Shop; its every-four-hours gift is superseded by the AW daily wheel direction.                                         |
| temZ2  | Actual coins/cards/gift Shop asset sources.                                                                                                  |
| TdPL6  | Quiet Shop AW: daily free wheel turn, deals/cards/coins, one main green button. The website shows the design without promising fixed prices. |
| L14A6A | Selected loading A, U3LH0w: current logo and large catless Weekenders.                                                                       |
| SrQ8H  | Selected Face-off icon IBtVP, now used for site icons.                                                                                       |
| P52fq  | Logo v6 exploration; alternatives are not the approved identity.                                                                             |
| dUhQW  | Five intentionally different unselected logo directions.                                                                                     |
| ZXP4K  | Explicitly marks current white FAMILY/cyan RUSH logo as approved; other variants remain alternatives.                                        |
| grQcU  | Several gameplay layouts; current P5 ELfFJ is one main POV road with rival PiP. Real P5 footage is used for Classic.                         |
| tFLMg  | Home/HUD alternatives; current reference iw8eB is shown for the road/cup progression.                                                        |
| YbbK2  | Reward-led result K2: cups/coins and earned puzzle piece. Fixed example amounts are not advertised.                                          |
| ScCYM  | Quiet Power page, separate member and Dad powers, equipped/locked/exhausted states.                                                          |
| RmKfW  | Family selection and rename, current family lineups, one green action.                                                                       |

Keep Classic and Sprint separate. Sprint's individual boards turn matches directly into speed; its combos do not create Classic's rockets/rainbows/gifts. Thirteen new twist concepts are additional to Classic. Puzzle picture/room rewards are coins; obsolete refill claims were excluded. Selected Ranks C separates weekly/all-time and global/country; tournament layouts remain development proposals. The website describes the experience being built, with development status and tester invitation, without claiming a public store launch.

## Assets and camera

`docs/assets/fr-next/screens/` contains read-only Pencil exports, not proof of shipped UI. `art/` contains actual puzzle illustrations and Sprint item cutouts. `families/` uses the current 6 November no-animal loading sources. Original game/design files were not changed.

Classic recording: active FamilyRush `Builds/match_p5/out_r4/match_p5.mp4`; the current video is20.93s, with Dad Mode around3.8s and return around15.93s. `nov6-art-manifest.json` retains its provenance. Old power demo videos are not part of the redesigned page.

The lazy Three.js run retains the native first-person camera contract: eye3, vertical FOV74, near.1, road curve.0009, source horizon aim, camera-local arms at(0,0,-.9), +10° pitch, scale3. Browser aspect widens the same view. `cel-material.js` keeps the whole solid scene in the same cel-shaded lighting. Preserve the real geometry, rigs and painted colors; do not substitute an orbit or visible Dad back. Recorded fallback is used if WebGL fails.

One renderer, capped pixel ratio, 30/45FPS admission, off-tab suspension, on-scroll visibility, reduced motion and pause controls. Source geometry/native-art/arms manifests remain in this folder.
