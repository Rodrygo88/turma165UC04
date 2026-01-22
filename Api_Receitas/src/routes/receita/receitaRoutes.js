import express from "express";
import { ReceitaController } from "../../controllers/receita/ReceitaController.js";

const router = express.Router();

//Rota para listar todos os receitas:
router.get("/", ReceitaController.listarReceitas);

//Rota para buscar um receita por ID:
router.get("/:id", ReceitaController.buscarPorId);

//Rota para criar um novo receita:
router.post("/", ReceitaController.criarReceita);

//Rota para atualizar um novo receita:
router.put("/:id", ReceitaController.atualizarReceita);

//Rota para deletar um receita:
router.delete("/:id", ReceitaController.deletarReceita);


export default router;
