import fs from "node:fs";
import path from "node:path";

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Ensure 'out' directory is populated
if (!fs.existsSync("out")) {
  fs.mkdirSync("out", { recursive: true });
}
if (fs.existsSync(".next/server/app")) {
  copyRecursive(".next/server/app", "out");
}
if (fs.existsSync(".next/static")) {
  copyRecursive(".next/static", "out/_next/static");
}

// 2. Synchronize all built static assets into 'public' and 'dist'
if (fs.existsSync("out")) {
  copyRecursive("out", "public");
  copyRecursive("out", "dist");
}

// Guarantee index.html is present in public and out and dist
for (const dir of ["public", "dist", "out"]) {
  if (fs.existsSync(path.join(dir, "index.html"))) {
    console.log(`✓ ${dir}/index.html confirmed ready.`);
  }
}
