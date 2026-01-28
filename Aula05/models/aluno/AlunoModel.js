import { cursos } from "../../data/cursos.data.js";
import { alunos } from "../../data/alunos.data.js";

export class AlunoModel {
  static listarAlunos() {
    return alunos;
  }

  static buscarAlunoId(id) {
    return alunos.find((c) => c.id === parseInt(id));
  }

  static criarAluno(matricula, nome, email, cursoId) {
    const novoAluno = {
      id: alunos.length + 1,
      matricula: matricula,
      nome: nome,
      email: email,
      cursoId: cursoId,
    };
    alunos.push(novoAluno);
    return novoAluno;
  }

  static atualizarAluno(id, matricula, nome, email, cursoId) {
    const index = alunos.findIndex((a) => a.id === parseInt(id));
    if (index === -1) {
      return false;
    }
    alunos[index] = {
      id: parseInt(id),
      matricula: matricula,
      nome: nome,
      email: email,
      cursoId: cursoId,
    };
    return alunos[index];
  }
}
