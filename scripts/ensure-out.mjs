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

if (!fs.existsSync("out")) {
  console.log("Creating out directory from build artifacts...");
  fs.mkdirSync("out", { recursive: true });

  // 1. Copy public directory assets
  if (fs.existsSync("public")) {
    copyRecursive("public", "out");
  }

  // 2. Copy static files from .next
  if (fs.existsSync(".next/static")) {
    copyRecursive(".next/static", "out/_next/static");
  }

  // 3. Copy HTML pages from .next/server/app
  if (fs.existsSync(".next/server/app")) {
    copyRecursive(".next/server/app", "out");
  }

  // 4. Ensure index.html exists
  if (fs.existsSync(".next/server/app/index.html") && !fs.existsSync("out/index.html")) {
    fs.copyFileSync(".next/server/app/index.html", "out/index.html");
  }
}

// Guarantee public images are in out/images
if (fs.existsSync("public/images") && !fs.existsSync("out/images")) {
  copyRecursive("public/images", "out/images");
}

// Copy everything from out into dist
copyRecursive("out", "dist");

if (fs.existsSync("dist")) {
  const distFiles = fs.readdirSync("dist");
  console.log(`✓ Verified output directory 'dist' exists with ${distFiles.length} top-level entries:`, distFiles.slice(0, 10).join(", "));
} else {
  console.error("❌ Failed to guarantee 'dist' directory exists!");
  process.exit(1);
}
