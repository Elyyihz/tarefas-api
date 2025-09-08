import { v4 as uuidv4 } from 'uuid';

class Tarefa {
  constructor(descricao, concluida = false) {
    this.objectId = uuidv4();
    this.descricao = descricao;
    this.concluida = concluida;
    this.dataCriacao = new Date();
    this.dataAtualizacao = new Date();
  }

  atualizar(dados) {
    if (dados.descricao !== undefined) {
      this.descricao = dados.descricao;
    }
    if (dados.concluida !== undefined) {
      this.concluida = dados.concluida;
    }
    this.dataAtualizacao = new Date();
  }
}

export const tarefas = [];

export default Tarefa;