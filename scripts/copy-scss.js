#!/usr/bin/env bun
/* eslint-disable no-undef */
import { promises as fs } from "fs";
import path from "path";

const src = path.resolve(process.cwd(), "src", "scss");
const dest = path.resolve(process.cwd(), "dist", "scss");

async function copyDir(srcDir, destDir) {
  await fs.mkdir(destDir, { recursive: true });
  const entries = await fs.readdir(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

copyDir(src, dest).catch((err) => {
  console.error("Failed to copy SCSS files:", err);
  process.exit(1);
});
