import express from "express";
import { autenticarToken } from "../middlewares/authMiddleware.js";
import { UsuarioController } from "../controllers/UsuarioController.js";
import { autorizarPapeis } from "../middlewares/autorizarPapeis.js";

const router = express.Router();

//ROTAS PUBLICAS

router.post("/", UsuarioController.criarUsuario);

router.post("/login", UsuarioController.verificarLogin);

//ROTAS PRIVADAS

router.get("/", autenticarToken, autorizarPapeis("ADMIN"), UsuarioController.listarUsuarios);

router.post("/admin/user", autorizarPapeis("ADMIN"), UsuarioController.criarUsuarioPorAdmin);

router.get("/:id", autenticarToken,  autorizarPapeis("ADMIN", "MOD"),UsuarioController.buscarPorId);

router.delete("/:id", autenticarToken, autorizarPapeis("ADMIN"), UsuarioController.deletarUser);

router.put("/:id", autenticarToken, UsuarioController.atualizarUsuario);

router.patch("/:id", autenticarToken, UsuarioController.atualizarParcialmente);

export default router;