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

    /* ATIVIDADE */

    static async buscarPorOrdem(req, res) {
      try {
        const result = await AlunoModel.buscarPorOrdem();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno para ordenar no banco." });
          return;
        }
        res.status(200).json({ msg: "Alunos em ordem alfabética!", aluno: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar alunos em ordem alfabética.",erro: error.message});
      }
  }

    static async buscarPorRank(req, res) {
      try {
        const result = await AlunoModel.buscarPorRank();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno para fazer rank nota no banco." });
          return;
        }
        res.status(200).json({ msg: "Rank de alunos!", aluno: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar alunos em rank.",erro: error.message});
      }
  }

    static async buscarPorNomeNota(req, res) {
      try {
        const result = await AlunoModel.buscarPorNomeNota();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno para retornar nome e nota no banco." });
          return;
        }
        res.status(200).json({ msg: "Nome e notas dos alunos!", aluno: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar nome e notas dos alunos.",erro: error.message});
      }
  }

    static async buscarCursos(req, res) {
      try {
        const result = await AlunoModel.buscarCursos();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum curso no banco." });
          return;
        }
        res.status(200).json({ msg: "Cursos dos alunos!", aluno: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar cursos dos alunos.",erro: error.message});
      }
  }

    static async buscarParteNome(req, res) {
      try {
        const { nome } = req.params;
        const result = await AlunoModel.buscarParteNome(nome);
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno encontrado no banco." });
          return;
        }
        res.status(200).json({ msg: "Alunos com essas iniciais!", alunos: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar alunos com essas iniciais.",erro: error.message});
      }
  }

  static async buscarNotasMaiores(req, res) {
      try {
        const { nota } = req.params;
        const result = await AlunoModel.buscarNotasMaiores(nota);
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno com notas superiores a essa encontrados no banco." });
          return;
        }
        res.status(200).json({ msg: "Alunos com notas maiores!", alunos: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar alunos com nota maiores.",erro: error.message});
      } 
  }

  static async buscarEntreValores(req, res) {
      try {
        const { min, max } = req.params;
        const result = await AlunoModel.buscarEntreValores(min, max);
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno com notas entre esses valores no banco." });
          return;
        }
        res.status(200).json({ msg: "Alunos com notas entre esses valores!", alunos: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar alunos entre essas notas.",erro: error.message});
      } 
  }

  static async buscarMedia(req, res) {
      try {
        const result = await AlunoModel.buscarMedia();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno com notas para fazer a media no banco." });
          return;
        }
        res.status(200).json({ msg: "Media dos alunos!", media: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao calcular media dos alunos.",erro: error.message});
      } 
  }


  static async buscarMaiorMenor(req, res) {
      try {
        const result = await AlunoModel.buscarMaiorMenor();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno com notas para buscar no banco." });
          return;
        }
        res.status(200).json({ msg: "Nota maior e menor dos alunos!", extremos: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar nota maior e menor dos alunos.",erro: error.message});
      } 
  }

  static async buscarAlunosCurso(req, res) {
      try {
        const result = await AlunoModel.buscarAlunosCurso();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum curso com alunos no banco." });
          return;
        }
        res.status(200).json({ msg: "Quantidade de alunos por curso!", cursos: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar quantidade de alunos.",erro: error.message});
      } 
  }
  
  static async buscarTopMaiores(req, res) {
      try {
        const result = await AlunoModel.buscarTopMaiores();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum top 3 maiores de alunos no banco." });
          return;
        }
        res.status(200).json({ msg: "Top 3 alunos por maior nota!", cursos: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar top 3 alunos com maior nota.",erro: error.message});
      } 
  }

  static async buscarTopMenor(req, res) {
      try {
        const result = await AlunoModel.buscarTopMenor();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum top 1 menor de alunos no banco." });
          return;
        }
        res.status(200).json({ msg: "Top 1 alunos por menor nota!", cursos: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar top 1 aluno com menor nota.",erro: error.message});
      } 
  }

  static async buscarComStatus(req, res) {
      try {
        const result = await AlunoModel.buscarComStatus();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno no banco para fazer o status." });
          return;
        }
        res.status(200).json({ msg: "Status dos alunos!", cursos: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar status dos aluno.",erro: error.message});
      } 
  }

  static async buscarMediaPorCurso(req, res) {
      try {
        const result = await AlunoModel.buscarMediaPorCurso();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno para calcular media por curso." });
          return;
        }
        res.status(200).json({ msg: "Media por cursos!", cursos: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao buscar media dos cursos.",erro: error.message});
      } 
  }

  static async buscarRankCompleto(req, res) {
      try {
        const result = await AlunoModel.buscarRankCompleto();
        if (!result.rows || result.rows == 0) {
          res.status(404).json({ msg: "Nenhum aluno para rank." });
          return;
        }
        res.status(200).json({ msg: "Rank Completo!", rank: result.rows });
      } catch (error) {
        res.status(500).json({msg: "Erro interno ao fazer Rank Completo.",erro: error.message});
      } 
  }

}
