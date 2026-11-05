import http from "node:http";
import { createReadStream, statSync } from "node:fs";
import { resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../../docs/", import.meta.url));
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".glb": "model/gltf-binary",
  ".mp4": "video/mp4",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
};
http
  .createServer((req, res) => {
    try {
      const url = new URL(req.url, "http://localhost");
      let path = resolve(root, "." + decodeURIComponent(url.pathname));
      if (path !== resolve(root) && !path.startsWith(root)) throw Error("path");
      let stat = statSync(path);
      if (stat.isDirectory()) {
        path = resolve(path, "index.html");
        stat = statSync(path);
      }
      const headers = {
        "Content-Type": types[extname(path)] || "application/octet-stream",
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-store",
      };
      const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
      let start = 0,
        end = stat.size - 1,
        status = 200;
      if (range) {
        start = Number(range[1]);
        end = range[2] ? Math.min(Number(range[2]), end) : end;
        if (start > end) {
          res.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
          res.end();
          return;
        }
        status = 206;
        headers["Content-Range"] = `bytes ${start}-${end}/${stat.size}`;
      }
      headers["Content-Length"] = end - start + 1;
      res.writeHead(status, headers);
      if (req.method === "HEAD") res.end();
      else createReadStream(path, { start, end }).pipe(res);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  })
  .listen(8766, "127.0.0.1", () =>
    console.log("Family Rush preview: http://127.0.0.1:8766"),
  );
