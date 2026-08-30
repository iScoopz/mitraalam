const sharp = require('sharp');
const path = require('path');

async function measureScale() {
  const inputPath = path.join(__dirname, '../public/images/original_reference_hero.png');
  
  // Crop a clean 240x240 tile from the top right area
  await sharp(inputPath)
    .extract({ left: 500, top: 20, width: 240, height: 240 })
    .png()
    .toFile(path.join(__dirname, '../public/images/scale_sample_240.png'));

  console.log('scale_sample_240.png created');
}

measureScale().catch(console.error);
