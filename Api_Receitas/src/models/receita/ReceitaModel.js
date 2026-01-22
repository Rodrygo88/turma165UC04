import { receitas } from "../../data/banco.js";

export class ReceitaModel {
  static listarTodos() {
    return receitas;
  }

  static buscarPorId(id) {
    return receitas.find((u) => u.id === parseInt(id));
  }

  static criarReceita(nome, ingredientes, modoPreparo, tempoPreparo) {
    const novoReceita = {
      id: receitas.length + 1,
      nome: nome,
      ingredientes: ingredientes,
      modoPreparo: modoPreparo,
      tempoPreparo: tempoPreparo
    };
    receitas.push(novoReceita);
    return novoReceita;
  }

  static atualizarReceita(id, nome, ingredientes, modoPreparo, tempoPreparo) {
    const index = receitas.findIndex((u) => u.id === parseInt(id));
    receitas[index] = {
      id: parseInt(id),
      nome: nome,
      ingredientes: ingredientes,
      modoPreparo: modoPreparo,
      tempoPreparo: tempoPreparo
    };
    return receitas[index];
  }
  static deletarReceita(id){
    const index = receitas.findIndex((u) => u.id === parseInt(id));
    if(index===-1){
        return false
    }
    receitas.splice(index, 1);
    return true;
  }
}
