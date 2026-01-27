import { CursoModel } from "../../models/curso/CursoModel.js";

export class CursoController{
    
    static listarCursos(req, res){
        try{
            const cursos = CursoModel.listarCursos();
            if (cursos.length === 0 || !cursos){
                res.status(400).json({msg:"Nenhum curso cadastrado no banco."});
                return
            }

            res.status(200).json({msg:"Cursos encontrado: ", cursos});
        } catch(error){
            res.status(500).json({msg: "Erro interno ao listar os cursos ", erro: error.message});
        }
    }
}