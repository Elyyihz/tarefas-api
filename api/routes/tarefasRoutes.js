import express from 'express';
import {
  criarTarefa,
  listarTarefas,
  obterTarefa,
  atualizarTarefa,
  excluirTarefa
} from '../controllers/tarefasController.js';

const router = express.Router();

router.post('/', criarTarefa);

router.get('/', listarTarefas);

router.get('/:objectId', obterTarefa);

router.put('/:objectId', atualizarTarefa);

router.delete('/:objectId', excluirTarefa);

export default router;