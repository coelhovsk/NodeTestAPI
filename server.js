import express from 'express';
import path from 'path';
import { router as dataRoutes } from './routes/router.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use('/', dataRoutes);

// Rota para servir o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(3000, () => {
  console.log("Server rodando na porta 3000 em: http://localhost:3000");
});
