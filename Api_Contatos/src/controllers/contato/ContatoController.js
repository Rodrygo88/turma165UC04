import { ContatoModel } from "../../models/contato/ContatoModel.js";

export class ContatoController{

    static listarContatos(req, res){
        try {
            const contatos = ContatoModel.listarTodos();
            if(contatos.length === 0 || !contatos){
                res.status(200).json({msg: "Nenhum contato no banco."});
                return
            }
            res.status(200).json({msg:"Contatos Encontrados: ", contatos});
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao listar os contatos ", erro:error.message});
        }
    }

    static buscarPorId(req, res){
        try {
            const {id} = req.params;
            if(!id){
                res.status(400).json({msg: "O Id não pode ser vazio."});
                return;
            }
            const contato = ContatoModel.buscarPorId(id);
            if(!contato){
                res.status(404).json({msg: "Nenhum contato com este Id."})
                return;
            }
            res.status(200).json({msg: "Contato encontrado: ", contato});
           
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao buscar o contato ", erro:error.message});
        }
    }

    static buscarPorEmail(req, res){
        try {
            const {email} = req.params;
            if(!email){
                res.status(400).json({msg: "O email não pode ser vazio."});
                return;
            }
            const contato = ContatoModel.buscarPorEmail(email);
            if(!contato){
                res.status(404).json({msg: "Nenhum contato com este email."})
                return;
            }
            res.status(200).json({msg: "Contato encontrado: ", contato});
           
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao buscar o contato ", erro:error.message});
        }
    }

    static buscarPorNome(req, res){
        try {
            const {nome} = req.params;
            if(!nome){
                res.status(400).json({msg: "O nome não pode ser vazio."});
                return;
            }
            const contato = ContatoModel.buscarPorNome(nome);
            if(!contato){
                res.status(404).json({msg: "Nenhum contato com este nome."})
                return;
            }
            res.status(200).json({msg: "Contato encontrado: ", contato});
           
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao buscar o contato ", erro:error.message});
        }
    }


    static criarContato(req, res){
        try{
            const {nome, email, telefone} = req.body;
            if(!nome || !email || !telefone){
                res.status(400).send({msg:"Todos os campos devem ser preenchidos no cadastro."});
                return;
            }

            const contato = ContatoModel.buscarPorEmail(email);
            if(contato){
                res.status(404).json({msg: "Contato com este email já existente."})
                return;
            }

            if(telefone.length < 9){
                res.status(404).send({msg:"O telefone deve ter no minimo 9 dígitos."});
                return;
            }
            const novoContato = ContatoModel.criarContato(nome, email, telefone);
            res.status(200).json({msg: "Contato criado com sucesso!", novoContato});
            
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao cadastrar contato.", erro: error.message});
        }
    }

    static atualizarContato(req, res){
        try {
            const {id} = req.params;
            const {nome, email, telefone} = req.body;
            if(!nome || !email || !telefone){
                res.status(400).json({msg:"Todos os campos devem ser preenchidos na atualização."});
                return;
            }

            if(!id){
                res.status(400).json({msg:"Nenhum id fornecido na atualização."});
                return;
            }

            const contatoId = ContatoModel.buscarPorId(id);
            if(!contatoId){
                res.status(404).json({msg:"Contato não encontrado."})
                return
            }

            const novoContato = ContatoModel.atualizarContato(id, nome, email, telefone);
            res.status(201).json({msg:"Contato atualizado com sucesso!", novoContato});

        } catch (error){
            res.status(500).json({msg:"Erro interno ao atualizar.", erro: error.message})
        }
    }

    static deletarContato(req, res){
        try {
            const {id} = req.params;
            if(!id){
                res.status(400).json({msg:"Nenhum id fornecido para deletar."});
                return;
            }
            const delContato = ContatoModel.deletarContato(id);
            if (!delContato){
                res.status(404).json({msg:"Contato não encontrado com este Id."});
                return;
            }
            res.status(200).json({msg:"Contato deletado com sucesso!"})
        } catch (error) {
            res.status(500).json({msg:"Erro interno ao deletar.", erro: error.message})
        }
    }

}