const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateExactScaleTexture() {
  const width = 1920;
  const height = 1080;

  // Exact scale size: 80px width by 46px height
  const scaleW = 80;
  const scaleH = 46;
  const halfW = scaleW / 2;
  const halfH = scaleH / 2;

  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <!-- Base Ocean Deep Gradient with spotlight behind logo on right -->
      <radialGradient id="ocean-glow" cx="72%" cy="48%" r="62%">
        <stop offset="0%" stop-color="#14758d" />
        <stop offset="25%" stop-color="#0e586c" />
        <stop offset="55%" stop-color="#063240" />
        <stop offset="85%" stop-color="#031d27" />
        <stop offset="100%" stop-color="#02141c" />
      </radialGradient>

      <!-- 3D Scallop/Scale Gradient -->
      <radialGradient id="scale-grad" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#2dd4bf" stop-opacity="0.28" />
        <stop offset="45%" stop-color="#0891b2" stop-opacity="0.16" />
        <stop offset="75%" stop-color="#02222c" stop-opacity="0.55" />
        <stop offset="100%" stop-color="#011016" stop-opacity="0.9" />
      </radialGradient>

      <!-- Soft Drop Shadow Filter for Scale Depth -->
      <filter id="scale-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#000000" flood-opacity="0.6" />
      </filter>

      <!-- Repeating Fish Scale Pattern -->
      <pattern id="fish-scale-pattern" width="${scaleW}" height="${scaleH * 2}" patternUnits="userSpaceOnUse">
        <!-- Row 0: Top tier -->
        <g filter="url(#scale-shadow)">
          <ellipse cx="0" cy="0" rx="42" ry="34" fill="url(#scale-grad)" stroke="#021b24" stroke-width="1.2" stroke-opacity="0.5" />
          <ellipse cx="${scaleW}" cy="0" rx="42" ry="34" fill="url(#scale-grad)" stroke="#021b24" stroke-width="1.2" stroke-opacity="0.5" />
        </g>

        <!-- Row 1: Middle tier offset by halfW and scaleH -->
        <g filter="url(#scale-shadow)">
          <ellipse cx="${halfW}" cy="${scaleH}" rx="42" ry="34" fill="url(#scale-grad)" stroke="#021b24" stroke-width="1.2" stroke-opacity="0.5" />
        </g>

        <!-- Row 2: Bottom tier -->
        <g filter="url(#scale-shadow)">
          <ellipse cx="0" cy="${scaleH * 2}" rx="42" ry="34" fill="url(#scale-grad)" stroke="#021b24" stroke-width="1.2" stroke-opacity="0.5" />
          <ellipse cx="${scaleW}" cy="${scaleH * 2}" rx="42" ry="34" fill="url(#scale-grad)" stroke="#021b24" stroke-width="1.2" stroke-opacity="0.5" />
        </g>
      </pattern>
    </defs>

    <!-- Base Glow Layer -->
    <rect width="${width}" height="${height}" fill="url(#ocean-glow)" />

    <!-- Overlay Fish Scale Pattern -->
    <rect width="${width}" height="${height}" fill="url(#fish-scale-pattern)" />
  </svg>
  `;

  await sharp(Buffer.from(svgContent))
    .png()
    .toFile(path.join(__dirname, '../public/images/mitra_alam_scale_bg_exact.png'));

  // Also create a tileable SVG version for CSS background-image
  const tileSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${scaleW}" height="${scaleH * 2}" viewBox="0 0 ${scaleW} ${scaleH * 2}">
    <defs>
      <radialGradient id="sg" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.22" />
        <stop offset="50%" stop-color="#0891b2" stop-opacity="0.14" />
        <stop offset="80%" stop-color="#02222c" stop-opacity="0.5" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.85" />
      </radialGradient>
      <filter id="ss" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#ss)">
      <ellipse cx="0" cy="0" rx="42" ry="34" fill="url(#sg)" stroke="rgba(2,27,36,0.7)" stroke-width="1" />
      <ellipse cx="${scaleW}" cy="0" rx="42" ry="34" fill="url(#sg)" stroke="rgba(2,27,36,0.7)" stroke-width="1" />
      <ellipse cx="${halfW}" cy="${scaleH}" rx="42" ry="34" fill="url(#sg)" stroke="rgba(2,27,36,0.7)" stroke-width="1" />
      <ellipse cx="0" cy="${scaleH * 2}" rx="42" ry="34" fill="url(#sg)" stroke="rgba(2,27,36,0.7)" stroke-width="1" />
      <ellipse cx="${scaleW}" cy="${scaleH * 2}" rx="42" ry="34" fill="url(#sg)" stroke="rgba(2,27,36,0.7)" stroke-width="1" />
    </g>
  </svg>
  `;
  fs.writeFileSync(path.join(__dirname, '../public/images/scale-tile.svg'), tileSvg);

  console.log('mitra_alam_scale_bg_exact.png and scale-tile.svg generated successfully!');
}

generateExactScaleTexture().catch(console.error);
