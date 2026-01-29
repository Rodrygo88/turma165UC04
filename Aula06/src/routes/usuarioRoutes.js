import { UsuarioController } from "../controllers/UsuarioController.js";
import express from "express";

const router = express.Router();

router.get("/", UsuarioController.listarUsuarios);

router.post("/", UsuarioController.criarUsuario);

router.put("/:id", UsuarioController.atualizarUsuario);

router.get("/:id", UsuarioController.buscarUsuarioId);

router.delete("/:id", UsuarioController.deletarUsuario);

export default router;