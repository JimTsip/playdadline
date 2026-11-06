import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../../docs/", import.meta.url));
async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (/\.(html|css)$/.test(e.name)) yield p;
  }
}
let count = 0;
for await (const file of walk(root)) {
  const source = await readFile(file, "utf8");
  for (const m of source.matchAll(
    /(?:\b(?:src|href)\s*=\s*["']([^"']+)["']|url\(\s*["']?([^\s)'";]+))/g,
  )) {
    const url = m[1] || m[2];
    if (/^(?:https?:|mailto:|data:|#)/.test(url)) continue;
    const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
    if (!pathname) continue;
    let target = pathname.startsWith("/")
      ? resolve(root, "." + pathname)
      : resolve(dirname(file), pathname);
    if (pathname.endsWith("/")) target = join(target, "index.html");
    assert.ok(target.startsWith(root), `Path leaves public root: ${url}`);
    assert.ok((await stat(target)).isFile(), `${url} is not a shipped file`);
    count++;
  }
  if (file.endsWith(".html")) {
    const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, `Duplicate IDs in ${file}`);
    for (const m of source.matchAll(/href="#([^"]+)"/g))
      assert.ok(ids.includes(m[1]), `Missing anchor ${m[1]} in ${file}`);
  }
}
const home = await readFile(join(root, "index.html"), "utf8");
assert.equal(
  [...home.matchAll(/<h1[ >]/g)].length,
  1,
  "Home must have exactly one h1",
);
assert.equal(
  (await readFile(join(root, "CNAME"), "utf8")).trim(),
  "playfamilyrush.com",
);
console.log(
  `Validated ${count} local HTML/CSS asset references, anchors, unique IDs and domain.`,
);
