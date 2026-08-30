const sharp = require('sharp');
const path = require('path');

async function cleanBadges() {
  const haccpPath = path.join(__dirname, '../public/images/badge_haccp.png');
  const { data, info } = await sharp(haccpPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const transData = Buffer.from(data);

  for (let i = 0; i < transData.length; i += 4) {
    const r = transData[i];
    const g = transData[i + 1];
    const b = transData[i + 2];
    
    // If pixel is pure white or near white background (r > 245, g > 245, b > 245)
    if (r > 245 && g > 245 && b > 245) {
      transData[i + 3] = 0; // completely transparent
    }
  }

  await sharp(transData, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .png()
    .toFile(path.join(__dirname, '../public/images/badge_haccp_clean.png'));

  // Also trim FDA and GMP
  await sharp(path.join(__dirname, '../public/images/badge_fda.png'))
    .trim()
    .png()
    .toFile(path.join(__dirname, '../public/images/badge_fda_clean.png'));

  await sharp(path.join(__dirname, '../public/images/badge_gmp.png'))
    .trim()
    .png()
    .toFile(path.join(__dirname, '../public/images/badge_gmp_clean.png'));

  console.log('Badges trimmed and cleaned successfully!');
}

cleanBadges().catch(console.error);
