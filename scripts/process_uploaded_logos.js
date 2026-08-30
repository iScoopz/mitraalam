const sharp = require('sharp');
const path = require('path');

async function inspectAndProcessLogos() {
  const logoPath = path.join(__dirname, '../public/images/logo_mitra_alam.png');
  const metadata = await sharp(logoPath).metadata();
  console.log('Logo metadata:', metadata);

  // If the logo has a white background (RGB near 255), let's make a transparent PNG version
  const { data, info } = await sharp(logoPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const transData = Buffer.from(data);

  for (let i = 0; i < transData.length; i += 4) {
    const r = transData[i];
    const g = transData[i + 1];
    const b = transData[i + 2];
    
    // If pixel is pure white or near white background (r > 240, g > 240, b > 240)
    if (r > 240 && g > 240 && b > 240) {
      // Calculate alpha based on how close to white
      const minVal = Math.min(r, g, b);
      if (minVal > 250) {
        transData[i + 3] = 0; // completely transparent
      } else {
        transData[i + 3] = Math.round((255 - minVal) * 25.5);
      }
    }
  }

  await sharp(transData, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(path.join(__dirname, '../public/images/logo_mitra_alam_transparent.png'));

  console.log('logo_mitra_alam_transparent.png created successfully!');
}

inspectAndProcessLogos().catch(console.error);
