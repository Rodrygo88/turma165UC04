import { ReceitaModel } from "../../models/receita/ReceitaModel.js";

export class ReceitaController{

    static buscarPorIngrediente(req, res){
        try {
            const {ingrediente} = req.params;
            const receitas = ReceitaModel.buscarPorIngrediente(ingrediente);
            
            if(!receitas){
                res.status(200).json({msg: "Nenhuma receita no banco."});
                return
            }
            res.status(200).json({msg:"Receitas Encontrados: ", ingrediente});
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao listar os receitas ", erro:error.message});
        }
    }

    static listarReceitas(req, res){
        try {
            const receitas = ReceitaModel.listarTodos();
            if(receitas.length === 0 || !receitas){
                res.status(200).json({msg: "Nenhum receita no banco."});
                return
            }
            res.status(200).json({msg:"Receitas Encontrados: ", receitas});
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao listar os receitas ", erro:error.message});
        }
    }

    static buscarPorId(req, res){
        try {
            const {id} = req.params;
            if(!id){
                res.status(400).json({msg: "O Id não pode ser vazio."});
                return;
            }
            const receita = ReceitaModel.buscarPorId(id);
            if(!receita){
                res.status(404).json({msg: "Nenhum receita com este Id."})
                return;
            }
            res.status(200).json({msg: "Receita encontrado: ", receita});
           
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao buscar o receita ", erro:error.message});
        }
    }

    static criarReceita(req, res){
        try{
            const {nome, ingredientes, modoPreparo, tempoPreparo} = req.body;
            if(!nome || !ingredientes || !modoPreparo, !tempoPreparo){
                res.status(400).send({msg:"Todos os campos devem ser preenchidos no cadastro."});
                return;
            }

            const receitaNome = ReceitaModel.buscarPorNome(nome);
            if(receitaNome){
                res.status(404).json({msg:"Já existe a receita com esse nome."})
                return
            }

            if(tempoPreparo <= 0){
                res.status(404).send({msg:"O tempo de preparo da receita deve ser positivo."});
                return;
            }


            const novoReceita = ReceitaModel.criarReceita(nome, ingredientes, modoPreparo, tempoPreparo);
            res.status(200).json({msg: "Receita criada com sucesso!", novoReceita});
            
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao cadastrar receita.", erro: error.message});
        }
    }

    static atualizarReceita(req, res){
        try {
            const {id} = req.params;
            const {nome, ingredientes, modoPreparo, tempoPreparo} = req.body;
            if(!nome || !ingredientes || !modoPreparo, !tempoPreparo){
                res.status(400).json({msg:"Todos os campos devem ser preenchidos na atualização."});
                return;
            }

            if(!id){
                res.status(400).json({msg:"Nenhum id fornecido na atualização."});
                return;
            }

            const receitaId = ReceitaModel.buscarPorId(id);
            if(!receitaId){
                res.status(404).json({msg:"Receita não encontrado."})
                return
            }

            const novoReceita = ReceitaModel.atualizarReceita(id, nome, ingredientes, modoPreparo, tempoPreparo);
            res.status(201).json({msg:"Receita atualizado com sucesso!", novoReceita});

        } catch (error){
            res.status(500).json({msg:"Erro interno ao atualizar.", erro: error.message})
        }
    }

    static deletarReceita(req, res){
        try {
            const {id} = req.params;
            if(!id){
                res.status(400).json({msg:"Nenhum id fornecido para deletar."});
                return;
            }
            const delReceita = ReceitaModel.deletarReceita(id);
            if (!delReceita){
                res.status(404).json({msg:"Receita não encontrada com este Id."});
                return;
            }
            res.status(200).json({msg:"Receita deletado com sucesso!"})
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao deletar.", erro: error.message})
        }
    }

}