import { AlunoController } from "../../controllers/aluno/AlunoController.js";
import express from "express";

const router = express.Router();

router.get("/", AlunoController.listarAlunos); //Listar Alunos

router.post("/", AlunoController.criarAluno); //Criar Aluno

router.put("/:id", AlunoController.atualizarAluno); //Atualizar Aluno

router.delete("/:id", AlunoController.deletarAluno); //Deletar Aluno


export default router;