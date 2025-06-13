import express from 'express';
import cors from 'cors';
import questionRoutes from './routes/api/questionRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/questions', questionRoutes);

// Ruta raíz de prueba
app.get('/', (_req, res) => {
  res.send('API server is running');
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`🌍 API server running at http://localhost:${PORT}`);
});
