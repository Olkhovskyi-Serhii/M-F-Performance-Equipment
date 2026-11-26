import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const distDir = path.join(rootDir, 'dist');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

const copyTargets = [
  { src: 'index.html', dest: 'index.html' },
  { src: 'css', dest: 'css' },
  { src: 'js', dest: 'js' },
  { src: path.join('src', 'assets'), dest: path.join('src', 'assets') },
  { src: 'public', dest: 'public' }
];

for (const target of copyTargets) {
  const srcPath = path.join(rootDir, target.src);
  const destPath = path.join(distDir, target.dest);
  if (fs.existsSync(srcPath)) {
    fs.cpSync(srcPath, destPath, { recursive: true, force: true });
  }
}

console.log('Static HTML/CSS/JS build completed in dist/');
