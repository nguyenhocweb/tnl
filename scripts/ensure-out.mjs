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

// 1. Ensure 'out' directory has all static pages
if (!fs.existsSync("out")) {
  fs.mkdirSync("out", { recursive: true });
}
if (fs.existsSync(".next/server/app")) {
  copyRecursive(".next/server/app", "out");
}
if (fs.existsSync(".next/static")) {
  copyRecursive(".next/static", "out/_next/static");
}
if (fs.existsSync("public")) {
  copyRecursive("public", "out");
}

// 2. Ensure dist has all assets
copyRecursive("out", "dist");

// 3. Generate Vercel Build Output API v3 (.vercel/output)
const vercelOutputDir = ".vercel/output";
const vercelStaticDir = path.join(vercelOutputDir, "static");
fs.mkdirSync(vercelStaticDir, { recursive: true });
copyRecursive("out", vercelStaticDir);

const vercelConfig = {
  version: 3,
  routes: [
    { handle: "filesystem" },
    {
      src: "^/(?:([^/]+?)(?:/)?)$",
      dest: "/$1.html",
      check: true,
    },
    {
      src: "^/(?:([^/]+?)/([^/]+?)(?:/)?)$",
      dest: "/$1/$2.html",
      check: true,
    },
    {
      src: "/.*",
      dest: "/404.html",
      status: 404,
    },
  ],
};
fs.writeFileSync(
  path.join(vercelOutputDir, "config.json"),
  JSON.stringify(vercelConfig, null, 2),
);

console.log("✓ Vercel Build Output API v3 ready at .vercel/output");
console.log("✓ dist/ directory ready with static output");
console.log("✓ out/ directory ready with static output");
