import { AlunoController } from "../controllers/AlunoController.js";
import express from "express";

const router = express.Router();

router.get("/", AlunoController.listar);

export default router;