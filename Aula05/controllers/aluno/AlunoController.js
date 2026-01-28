import { AlunoModel } from "../../models/aluno/AlunoModel.js";
import { CursoModel } from "../../models/curso/CursoModel.js";

export class AlunoController {
  static listarAlunos(req, res) {
    const aluno = AlunoModel.listarAlunos();
    res.status(200).json({ Alunos: aluno });
  }

  static criarAluno(req, res) {
    try {
      const { matricula, nome, email, cursoId } = req.body;
      if (!matricula || !nome || !email || !cursoId) {
        res.status(400).json({ msg: "Todos os campos devem ser preenchidos!" });
        return;
      }
      const alunos = AlunoModel.listarAlunos();

      const matriculaValida = alunos.find((a) => a.matricula === matricula);
      const emailValida = alunos.find((a) => a.email === email);

      if (matriculaValida) {
        res.status(400).json({ msg: "Já existe um aluno com essa matricula cadastrada!" });
        return;
      }

      if (emailValida) {
        res.status(400).json({ msg: "Já existe um aluno com esse email cadastrada!" });
        return;
      }

      const cursos = CursoModel.listarCursos();
      const validarCursoId = cursos.find((c) => c.cursoId === parseInt(cursoId));

      if (!validarCursoId) {
        res.status(400).json({ msg: "Não existe um curso com esse ID!" });
        return;
      }

      const novoAluno = AlunoModel.criarAluno(matricula, nome, email, cursoId);
      res.status(201).json({ msg: "Aluno criado com sucesso!", novoAluno });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno ao criar aluno.", erro: error.message });
    }
  }
}
