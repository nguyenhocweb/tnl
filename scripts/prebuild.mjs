import fs from "node:fs";

if (fs.existsSync("app/.next")) {
  try {
    fs.rmSync("app/.next", { recursive: true, force: true });
    console.log("✓ Cleaned app/.next before build");
  } catch {}
}
