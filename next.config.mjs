import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("=== BUILD DIAGNOSTIC ===");
console.log("process.cwd():", process.cwd());
console.log("__dirname:", __dirname);
console.log("app in cwd?:", fs.existsSync(path.join(process.cwd(), "app")));
console.log("app in __dirname?:", fs.existsSync(path.join(__dirname, "app")));
console.log("========================");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

