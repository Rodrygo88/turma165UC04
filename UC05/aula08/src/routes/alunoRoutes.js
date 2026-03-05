import { AlunoController } from "../controllers/AlunoController.js";
import express from "express";

const router = express.Router();

router.get("/", AlunoController.listar);

router.get("/aprovados", AlunoController.buscarPorAprovados);

router.get("/reprovados", AlunoController.buscarPorReprovados);

router.get("/melhor", AlunoController.buscarPorMaior);

router.get("/recuperacao", AlunoController.buscarPorRecuperacao);

router.get("/:id", AlunoController.buscarPorId);

router.post("/", AlunoController.criar);

router.delete("/:id", AlunoController.deletar);

router.put("/:id", AlunoController.atualizar);

router.get("/curso/:curso", AlunoController.buscarPorCurso);



export default router;