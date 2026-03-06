import { AlunoController } from "../controllers/AlunoController.js";
import express from "express";

const router = express.Router();

router.get("/", AlunoController.listar);

router.get("/aprovados", AlunoController.buscarPorAprovados);

router.get("/reprovados", AlunoController.buscarPorReprovados);

router.get("/ordenados", AlunoController.buscarPorAprovados);

router.get("/ranking", AlunoController.buscarPorRank);

router.get("/melhor", AlunoController.buscarPorMaior);

router.get("/recuperacao", AlunoController.buscarPorRecuperacao);

router.get("/notas", AlunoController.buscarPorNomeNota);

router.get("/media", AlunoController.buscarMedia);

router.get("/extremos", AlunoController.buscarMaiorMenor);

router.get("/cursos", AlunoController.buscarCursos);

router.get("/quantidade-por-curso", AlunoController.buscarAlunosCurso);

router.get("/top3", AlunoController.buscarTopMaiores);

router.get("/pior", AlunoController.buscarTopMenor);

router.get("/:id", AlunoController.buscarPorId);

router.post("/", AlunoController.criar);

router.delete("/:id", AlunoController.deletar);

router.put("/:id", AlunoController.atualizar);

router.get("/curso/:curso", AlunoController.buscarPorCurso);

router.get("/busca/:nome", AlunoController.buscarParteNome);

router.get("/notas/maior/:nota", AlunoController.buscarNotasMaiores);

router.get("/notas/:min/:max", AlunoController.buscarEntreValores);

router.get("/status", AlunoController.buscarComStatus);

router.get("/media-por-curso", AlunoController.buscarMediaPorCurso);

router.get("/ranking-completo", AlunoController.buscarRankCompleto);

export default router;