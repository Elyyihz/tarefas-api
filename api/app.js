import "dotenv/config";
import cors from 'cors';
import express from "express";
import tarefasRoutes from './routes/tarefas.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tarefas', tarefasRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API de Tarefas funcionando!' });
});

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

