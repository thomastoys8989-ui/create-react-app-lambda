// Wrote by ThomasConway
const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy index.html to dist
const indexPath = path.join(__dirname, 'index.html');
const distIndexPath = path.join(distDir, 'index.html');
fs.copyFileSync(indexPath, distIndexPath);

// Copy _redirects if it exists
const redirectsPath = path.join(__dirname, 'public', '_redirects');
const distRedirectsPath = path.join(distDir, '_redirects');
if (fs.existsSync(redirectsPath)) {
  fs.copyFileSync(redirectsPath, distRedirectsPath);
}

console.log('Build complete! Files copied to dist/');
