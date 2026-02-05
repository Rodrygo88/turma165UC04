import express from "express";
import { autenticarToken } from "../middlewares/authMiddleware.js";
import { UsuarioController } from "../controllers/UsuarioController.js";

const router = express.Router();

//ROTAS PUBLICAS

router.post("/", UsuarioController.criarUsuario);

router.post("/login", UsuarioController.verificarLogin);

//ROTAS PRIVADAS

router.get("/", autenticarToken, UsuarioController.listarUsuarios);

router.get("/:id", autenticarToken, UsuarioController.buscarPorId);

router.delete("/:id", autenticarToken, UsuarioController.deletarUser);

router.put("/:id", autenticarToken, UsuarioController.atualizarUsuario);

router.patch("/:id", autenticarToken, UsuarioController.atualizarParcialmente);

export default router;