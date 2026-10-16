import fs from "node:fs";
import path from "node:path";

const src = path.resolve(".next");
const dest = path.resolve("app", ".next");

if (fs.existsSync(src)) {
  try {
    if (fs.existsSync(dest)) {
      fs.rmSync(dest, { recursive: true, force: true });
    }
    try {
      fs.symlinkSync(src, dest, "junction");
      console.log("✓ Successfully symlinked .next to app/.next for Vercel");
    } catch {
      fs.cpSync(src, dest, { recursive: true });
      console.log("✓ Successfully copied .next to app/.next for Vercel");
    }
  } catch (err) {
    console.warn("Postbuild sync warning:", err);
  }
}
