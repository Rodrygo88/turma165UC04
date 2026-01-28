import { CursoModel } from "../../models/curso/CursoModel.js";

export class CursoController{
    
    static listarCursos(req, res){
        const curso = CursoModel.listarCursos();
        res.status(200).json({"Cursos": curso})
        }
    
    static criarCurso(req, res){
        try {
            const {nome} = req.body;
            if(!nome){
                res.status(400).json({msg: "Todos os campos devem ser preenchidos!"});
                return;
            }
            const cursos = CursoModel.listarCursos();
            const buscarCurso = cursos.find(c=> c.nome.toLowerCase() === nome.toLowerCase());
            if(buscarCurso){
                res.status(400).json({msg: "Curso já existente!"});
                return;
            }

            const novoCurso = CursoModel.criarCurso(nome);
            res.status(201).json({msg: "Curso criado com sucesso!", novoCurso});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao cadastrar curso!", erro: error.message});
        }
    }
    
    static atualizarCurso(req, res){
        try{
            const {id} = req.params;
            const {nome} = req.body;
            
            if(!nome){
                res.status(400).json({msg: "Todos os campos devem ser preenchidos!"});
                return;
            }

            const buscarId = CursoModel.buscarCursoId(id);
            if(!buscarId){
                res.status(404).json({msg: "Curso inexistenete"});
                return;
            }

            const cursos = CursoModel.listarCursos();
            const buscarCurso = cursos.find(c=> c.nome.toLowerCase() === nome.toLowerCase());
            if(buscarCurso){
                res.status(400).json({msg: "Curso já existe com esse nome"});
                return;
            }
    
            const cursoAtualizado = CursoModel.atualizarCurso(id, nome);
            res.status(200).json({msg: "Curso atualizado com sucesso!", cursoAtualizado});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao atualizar curso!", erro: error.message});
        }
    }

    static deletarCurso(req, res){
        try {
            const {id} = req.params;
            const cursoDeletado = CursoModel.deletarCurso(id);
            if(!cursoDeletado){
                res.status(404).json({msg: "Curso não encontrado"});
                return
            }
            res.status(200).json({msg: "Curso deletado com sucesso"});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao deletar curso!", erro: error.message});
        }
    }

    static buscarAlunosPorCurso(req,res){
        try {
            const {idCurso} = req.params;
            const curso = CursoModel.buscarCursoId(idCurso);
            if (!curso){
                res.status(404).json({msg: "Curso não encontrado"});
                return
            }
            const alunosCurso = CursoModel.listarAlunosPorCurso(idCurso);
            if(alunosCurso.length === 0){
                res.status(200).json({msg: "Nenhum aluno vinculado ao curso", alunosCurso})
            }
            res.status(200).json({msg: "Alunos encontrados: ", alunosCurso});
        } catch (error) {
             res.status(500).json({msg: "Erro interno ao listar alunos do curso!", erro: error.message});
        }
    }
    }