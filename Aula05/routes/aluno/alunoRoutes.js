import { AlunoController } from "../../controllers/aluno/AlunoController.js";
import express from "express";

const router = express.Router();

router.get("/", AlunoController.listarAlunos); //Listar Alunos

router.post("/", AlunoController.criarAluno); //Criar Aluno



export default router;