import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const distDir = path.join(__dirname, 'dist');
const staticRoot =
  process.env.NODE_ENV === 'production' && fs.existsSync(distDir)
    ? distDir
    : __dirname;

app.use('/css', express.static(path.join(staticRoot, 'css')));
app.use('/js', express.static(path.join(staticRoot, 'js')));
app.use('/src/assets', express.static(path.join(staticRoot, 'src', 'assets')));
app.use('/assets', express.static(path.join(staticRoot, 'public', 'assets')));

app.get('/', (_req, res) => {
  res.sendFile(path.join(staticRoot, 'index.html'));
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(staticRoot, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Static landing server running at http://0.0.0.0:${PORT}`);
});
