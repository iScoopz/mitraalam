const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createAssets() {
  const inputPath = path.join(__dirname, '../public/images/original_reference_hero.png');

  // 1. Crop the exact logo with full droplet margins
  // left: 730, top: 235, width: 215, height: 200
  await sharp(inputPath)
    .extract({ left: 730, top: 235, width: 215, height: 200 })
    .png()
    .toFile(path.join(__dirname, '../public/images/mitra_alam_logo_full.png'));
  console.log('Logo full cropped');

  // Let's create a transparent version of the logo:
  // The background behind the logo has color around teal [20..30, 90..120, 110..140]
  // The silver metallic logo has grey/silver colors [180..255, 180..255, 180..255] or dark grey [60..120]
  // Or we can use the logo with soft blended edges.

  // 2. Extract a clean repeating tile of the fish scale texture from the clean top area:
  // Let's find the exact repeating period of the scales in the image.
  // In 1024 width, let's sample the top strip y: 0 to 180, x: 0 to 1024
  const topStrip = await sharp(inputPath)
    .extract({ left: 0, top: 0, width: 1024, height: 200 })
    .toBuffer();

  // Let's also extract the right clean side texture patch
  // y: 0 to 527, x: 450 to 720 (clean area between text and logo)
  const midCleanPatch = await sharp(inputPath)
    .extract({ left: 450, top: 0, width: 270, height: 527 })
    .toFile(path.join(__dirname, '../public/images/texture_clean_column.png'));

  // Let's create a full-width high-res background image (1920x1080) for Hero and Sections:
  // We can take the full original_reference_hero.png and remove the text region by copying from the clean patches!
  const heroImage = sharp(inputPath);
  const { data, info } = await heroImage.raw().toBuffer({ resolveWithObject: true });
  
  // Clone buffer to edit pixels
  const bgData = Buffer.from(data);
  const w = info.width; // 1024
  const h = info.height; // 527

  // Text is in region: x: 40..460, y: 140..340
  // Logo is in region: x: 740..945, y: 240..450
  // Clean texture column is in region: x: 470..710, y: 0..527
  // We can replace the text region and logo region with corresponding clean texture patches seamlessly!
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;

      // If in text region (left side), copy texture from symmetric/clean region (x + 350 or clean column)
      if (x >= 35 && x <= 470 && y >= 140 && y <= 335) {
        // Sample texture from clean area x: 480 + (x % 220)
        const srcX = 480 + ((x - 35) % 220);
        const srcY = y;
        const srcIdx = (srcY * w + srcX) * 4;
        
        bgData[idx] = data[srcIdx];
        bgData[idx + 1] = data[srcIdx + 1];
        bgData[idx + 2] = data[srcIdx + 2];
        bgData[idx + 3] = data[srcIdx + 3];
      }

      // If in logo region (right side), copy texture from clean column
      if (x >= 735 && x <= 945 && y >= 240 && y <= 450) {
        const srcX = 480 + ((x - 735) % 220);
        const srcY = y;
        const srcIdx = (srcY * w + srcX) * 4;
        
        bgData[idx] = data[srcIdx];
        bgData[idx + 1] = data[srcIdx + 1];
        bgData[idx + 2] = data[srcIdx + 2];
        bgData[idx + 3] = data[srcIdx + 3];
      }
    }
  }

  // Save the reconstructed 100% clean authentic background texture!
  await sharp(bgData, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile(path.join(__dirname, '../public/images/mitra_alam_bg_authentic.png'));

  // Also scale it up smoothly to full HD 1920x990 for crisp display on all screens
  await sharp(path.join(__dirname, '../public/images/mitra_alam_bg_authentic.png'))
    .resize(1920, 990, { fit: 'fill', kernel: 'lanczos3' })
    .png()
    .toFile(path.join(__dirname, '../public/images/mitra_alam_bg_hd.png'));

  console.log('mitra_alam_bg_authentic.png and mitra_alam_bg_hd.png created successfully!');
}

createAssets().catch(console.error);
