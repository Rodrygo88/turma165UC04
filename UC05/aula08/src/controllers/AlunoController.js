import { AlunoModel } from "../../AlunoModel.js";

export class AlunoController{

    static async listar(req, res){
        try {
            const result = await AlunoModel.listarTodos();
            if(!result.rows || result.rows == 0){
                res.status(404).json({msg: "Nenhum aluno no banco."});
                return;
            }
            res.status(200).json({msg: "Alunos encontrados!", alunos: result.rows});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao listar os alunos.", erro : error.message});
        }
    }

    static async buscarPorId(req, res){
        try {
            const {id} = req.params;
            const result = await AlunoModel.buscarPorId(id);
            if(!result.rows || result.rows == 0){
                res.status(404).json({msg: "Nenhum aluno no banco."});
                return;
            }
            res.status(200).json({msg: "Aluno encontrado!", aluno: result.rows});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao buscar aluno por id.", erro : error.message});
        }
    }
}