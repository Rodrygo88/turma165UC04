import express from "express";
import { UsuarioController } from "../controllers/UsuarioController.js";

const router = express.Router();

router.get("/", UsuarioController.listarUsuarios);

router.post("/", UsuarioController.criarUsuario);

router.post("/login", UsuarioController.verificarLogin);

export default router;