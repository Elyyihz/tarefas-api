import cors from 'cors';
import express from "express";
import tarefasRoutes from './routes/tarefasRoutes.js';

const app = express();
app.use(express.json());

var corsOptions = {
  origin: ["*", "http://localhost:3000", "https://api-tarefas-ch9v9t2ir-elyys-projects.vercel.app/"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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

