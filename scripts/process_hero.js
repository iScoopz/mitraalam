const sharp = require('sharp');
const path = require('path');

async function processHero() {
  const inputPath = path.join(__dirname, '../public/images/original_reference_hero.png');
  const metadata = await sharp(inputPath).metadata();
  console.log('Hero metadata:', metadata);

  // Logo is located in right quadrant: roughly x: 740, y: 245, width: 190, height: 190
  await sharp(inputPath)
    .extract({ left: 740, top: 245, width: 190, height: 185 })
    .toFile(path.join(__dirname, '../public/images/mitra_alam_logo_crop.png'));
  console.log('Logo cropped successfully');

  // Let's create an exact full-width background texture image without text by inpainting / sampling the texture or using the upper/right portion:
  // Let's crop a wide texture block from the top and right
  await sharp(inputPath)
    .extract({ left: 0, top: 0, width: 1024, height: 230 })
    .toFile(path.join(__dirname, '../public/images/texture_top.png'));

  // Also let's extract a seamless repeating fish scale pattern tile!
}

processHero().catch(console.error);
