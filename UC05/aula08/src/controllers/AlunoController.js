import { AlunoModel } from "../../AlunoModel.js";

export class AlunoController {
  static async listar(req, res) {
    try {
      const result = await AlunoModel.listarTodos();
      if (!result.rows || result.rows == 0) {
        res.status(404).json({ msg: "Nenhum aluno no banco." });
        return;
      }
      res.status(200).json({ msg: "Alunos encontrados!", alunos: result.rows });
    } catch (error) {
      res.status(500).json({msg: "Erro interno ao listar os alunos.",erro: error.message});
    }
  }

  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const result = await AlunoModel.buscarPorId(id);
      if (!result.rows || result.rows == 0) {
        res.status(404).json({ msg: "Nenhum aluno no banco." });
        return;
      }
      res.status(200).json({ msg: "Aluno encontrado!", aluno: result.rows });
    } catch (error) {
      res.status(500).json({msg: "Erro interno ao buscar aluno por id.",erro: error.message});
    }
  }

  static async criar(req, res) {
    try {
      const { nome, curso, nota } = req.body;
      if (!nome || !curso || !nota) {
        res.status(400).json({ msg: "Todos os campos devem ser preenchidos" });
        return;
      }

      const result = await AlunoModel.criar(nome, curso, nota);
      if (result) {
        res.status(201).json({ msg: "Aluno cadastrado com sucesso no banco de dados!" });
        return;
      }
    } catch (error) {
        res.status(500).json({msg: "Erro interno ao cadastrar aluno.",erro: error.message});
    }
  }

  static async deletar(req, res){
    try {
        const { id } = req.params;
        const result = await AlunoModel.deletar(id);
        if(result.rowCount === 0){
            res.status(404).json({ msg: "Nenhum aluno com este id" });
            return;
        }
        res.status(200).json({ msg: "Aluno deletado com sucesso no banco de dados!" });

    } catch (error) {
        res.status(500).json({msg: "Erro interno ao deletar aluno.",erro: error.message});
    }
  }

  static async atualizar(req, res){
    try {
        const { id } = req.params;
        const { nome, curso, nota, } = req.body;
        if(!nome || !curso || !nota){
            res.status(400).json({msg: "Todos os campos devem ser preenchidos"});
            return;
        }

        const result = await AlunoModel.atualizar(id, nome, curso, nota);
        if(result.rowCount === 0){
            res.status(404).json({ msg: "Nenhum aluno com este id" });
            return;
        }
        res.status(201).json({ msg: "Aluno atualizado com sucesso no banco de dados!"});

    } catch (error) {
        res.status(500).json({msg: "Erro interno ao atualizar aluno.",erro: error.message});
    }
  }

  static async buscarPorCurso(req, res) {
    try {
      const { curso } = req.params;
      const result = await AlunoModel.buscarPorCurso(curso);
      if (!result.rows || result.rows == 0) {
        res.status(404).json({ msg: "Nenhum aluno neste curso no banco." });
        return;
      }
      res.status(200).json({ msg: "Alunos encontrados!", aluno: result.rows });
    } catch (error) {
      res.status(500).json({msg: "Erro interno ao buscar aluno por curso.",erro: error.message});
    }
  }

  static async buscarPorAprovados(req, res) {
    try {
      const result = await AlunoModel.buscarPorAprovados();
      if (!result.rows || result.rows == 0) {
        res.status(404).json({ msg: "Nenhum aluno aprovado no banco." });
        return;
      }
      res.status(200).json({ msg: "Alunos aprovados encontrados!", aluno: result.rows });
    } catch (error) {
      res.status(500).json({msg: "Erro interno ao buscar alunos aprovados.",erro: error.message});
    }
  }

  static async buscarPorReprovados(req, res) {
    try {
      const result = await AlunoModel.buscarPorReprovados();
      if (!result.rows || result.rows == 0) {
        res.status(404).json({ msg: "Nenhum aluno reprovado no banco." });
        return;
      }
      res.status(200).json({ msg: "Alunos reprovados encontrados!", aluno: result.rows });
    } catch (error) {
      res.status(500).json({msg: "Erro interno ao buscar alunos reprovados.",erro: error.message});
    }
  }

  static async buscarPorMaior(req, res) {
    try {
      const result = await AlunoModel.buscarPorMaior();
      if (!result.rows || result.rows == 0) {
        res.status(404).json({ msg: "Nenhum aluno com a maior nota no banco." });
        return;
      }
      res.status(200).json({ msg: "Aluno com nota maior encontrado!", aluno: result.rows });
    } catch (error) {
      res.status(500).json({msg: "Erro interno ao buscar aluno com a maior nota.",erro: error.message});
    }
  }

    static async buscarPorRecuperacao(req, res) {
    try {
      const result = await AlunoModel.buscarPorRecuperacao();
      if (!result.rows || result.rows == 0) {
        res.status(404).json({ msg: "Nenhum aluno com nota para recuperação no banco." });
        return;
      }
      res.status(200).json({ msg: "Alunos nas recuperação!", aluno: result.rows });
    } catch (error) {
      res.status(500).json({msg: "Erro interno ao buscar alunos em recuperação.",erro: error.message});
    }
  }

  
}
