import { contatos } from "../../data/banco.js";

export class ContatoModel {
  static listarTodos() {
    return contatos;
  }

  static buscarPorId(id) {
    return contatos.find((u) => u.id === parseInt(id));
  }

  static buscarPorEmail(email) {
    return contatos.find((u) => u.email === email);
  }

    static buscarPorNome(nome) {
    return contatos.find((u) => u.nome === nome);
  }

  static criarContato(nome, email, telefone) {
    const novoContato = {
      id: contatos.length + 1,
      nome: nome,
      email: email,
      telefone: telefone,
    };
    contatos.push(novoContato);
    return novoContato;
  }

  static atualizarContato(id, nome, email, telefone) {
    const index = contatos.findIndex((u) => u.id === parseInt(id));
    contatos[index] = {
      id: parseInt(id),
      nome: nome,
      email: email,
      telefone: telefone,
    };
    return contatos[index];
  }
  static deletarContato(id){
    const index = contatos.findIndex((u) => u.id === parseInt(id));
    if(index===-1){
        return false
    }
    contatos.splice(index, 1);
    return true;
  }
}
