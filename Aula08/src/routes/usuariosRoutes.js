import express from "express";
import { UsuarioController } from "../controllers/UsuarioController.js";

const router = express.Router();

router.get("/", UsuarioController.listarUsuarios);

router.get("/:id", UsuarioController.buscarPorId);

router.post("/", UsuarioController.criarUsuario);

router.post("/login", UsuarioController.verificarLogin);

router.delete("/:id", UsuarioController.deletarUser);

router.put("/:id", UsuarioController.atualizarUsuario);

router.patch("/:id", UsuarioController.atualizarParcialmente);

export default router;