import Tarefa, { tarefas } from '../models/Tarefa.js';
export const criarTarefa = (req, res) => {
  try {
    const { descricao, concluida = false } = req.body;

    if (!descricao || typeof descricao !== 'string') {
      return res.status(400).json({ 
        error: 'A descrição é obrigatória e deve ser uma string' 
      });
    }

    if (typeof concluida !== 'boolean') {
      return res.status(400).json({ 
        error: 'O campo concluida deve ser um booleano' 
      });
    }

    const novaTarefa = new Tarefa(descricao, concluida);
    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

export const listarTarefas = (req, res) => {
  try {
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

export const obterTarefa = (req, res) => {
  try {
    const { objectId } = req.params;
    const tarefa = tarefas.find(t => t.objectId === objectId);

    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter tarefa' });
  }
};

export const atualizarTarefa = (req, res) => {
  try {
    const { objectId } = req.params;
    const { descricao, concluida } = req.body;
    
    const tarefaIndex = tarefas.findIndex(t => t.objectId === objectId);

    if (tarefaIndex === -1) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    if (descricao !== undefined && typeof descricao !== 'string') {
      return res.status(400).json({ 
        error: 'A descrição deve ser uma string' 
      });
    }

    if (concluida !== undefined && typeof concluida !== 'boolean') {
      return res.status(400).json({ 
        error: 'O campo concluida deve ser um booleano' 
      });
    }

    tarefas[tarefaIndex].atualizar({ descricao, concluida });

    res.json(tarefas[tarefaIndex]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

export const excluirTarefa = (req, res) => {
  try {
    const { objectId } = req.params;
    const tarefaIndex = tarefas.findIndex(t => t.objectId === objectId);

    if (tarefaIndex === -1) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    tarefas.splice(tarefaIndex, 1);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir tarefa' });
  }
};