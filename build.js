const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "dist");
fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

fs.copyFileSync(
  path.join(__dirname, "src", "math.js"),
  path.join(distDir, "math.js")
);

const sha = process.env.GITHUB_SHA || "local";
const buildTime = new Date().toISOString();

const html = fs
  .readFileSync(path.join(__dirname, "public", "index.html"), "utf8")
  .replace("__BUILD_SHA__", sha.slice(0, 7))
  .replace("__BUILD_TIME__", buildTime);

fs.writeFileSync(path.join(distDir, "index.html"), html);

console.log(`Built dist/ for commit ${sha.slice(0, 7)} at ${buildTime}`);
