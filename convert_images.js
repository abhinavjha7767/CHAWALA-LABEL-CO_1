import sharp from "sharp";
import fs from "fs";
import path from "path";

const publicDir = "./public";
const files = fs.readdirSync(publicDir);

async function convert() {
  for (const file of files) {
    if (
      file.endsWith(".png") ||
      file.endsWith(".jpg") ||
      file.endsWith(".jpeg")
    ) {
      const input = path.join(publicDir, file);
      const stat = fs.statSync(input);

      // Only convert if larger than 500KB or if it's one of the product images
      if (stat.size > 500000 || file.startsWith("Products_")) {
        const output = path.join(
          publicDir,
          file.replace(/\.(png|jpg|jpeg)$/, ".webp"),
        );
        try {
          await sharp(input).webp({ quality: 80 }).toFile(output);
          console.log(
            `Converted ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB) to webp`,
          );
          // Note: We don't delete original files here to be safe, but code should point to webp
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
}

convert();
