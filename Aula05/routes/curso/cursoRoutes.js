import { CursoController } from "../../controllers/curso/CursoController.js";
import express from "express";

const router = express.Router();

router.get("/", CursoController.listarCursos); //Listar Cursos

router.post("/", CursoController.criarCurso); //Criar Curso

router.put("/:id", CursoController.atualizarCurso); //Atualizar Curso

router.delete("/:id", CursoController.deletarCurso); //Deletar Curso

router.get("/alunos/:idCurso", CursoController.buscarAlunosPorCurso); //Buscar Alunos Por Curso


export default router;