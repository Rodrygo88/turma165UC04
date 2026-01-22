import express from "express";
import { ContatoController } from "../../controllers/contato/ContatoController.js";

const router = express.Router();

//Rota para listar todos os contatos:
router.get("/", ContatoController.listarContatos);

//Rota para buscar um contato por ID:
router.get("/:id", ContatoController.buscarPorId);

//Rota para buscar por email um contato:
router.get("/email/:email", ContatoController.buscarPorEmail);

//Rota para buscar por nome um contato:
router.get("/nome/:nome", ContatoController.buscarPorNome);

//Rota para criar um novo contato:
router.post("/", ContatoController.criarContato);

//Rota para atualizar um novo contato:
router.put("/:id", ContatoController.atualizarContato);

//Rota para deletar um contato:
router.delete("/:id", ContatoController.deletarContato);


export default router;
