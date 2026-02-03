import { UsuarioModel } from "../models/UsuarioModel.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";


export class UsuarioController{
    static listarUsuarios(req, res){
        try {
            const usuarios = UsuarioModel.listarUsuarios();
            if(!usuarios || usuarios.length === 0){
                res.status(404).json({msg: "Nenhum usuário cadastrado!"});
                return;
            }
            res.status(200).json({msg: "Usuários encontradooos"}, usuarios);
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao listar usuários", erro: error.message});
        }
    }

     static async criarUsuario(req,res){
        try {
            const {nome, email, senha} = req.body;
            if(!nome || !email || !senha){
                res.status(400).json({msg: "Todos os campos devem ser preechidos."});
                return;
            }

            const SALT = process.env.SALT;
            const senhaHash = await bcrypt.hash(senha, parseInt(SALT));
            const novoUsuario = {
                id: uuidv4(),
                nome: nome,
                email: email,
                senha: senhaHash
            }
            const usuarioCriado = UsuarioModel.criarUsuario(novoUsuario);
            if(usuarioCriado){
                res.status(201).json({msg: "Usuario criado com sucesso!", usuarioCriado});
                return
            }

        } catch (error) {
            res.status(500).json({msg: "Erro interno ao criar usuários", erro: error.message});
        }
    }

    static async verificarLogin(req,res){
        try {
            const {email, senha} = req.body;
            if(!email || !senha){
                res.status(400).json({msg: "Todos os campos devem ser preechidos."});
                return;
            }

            const usuario = UsuarioModel.listarUsuarios().find(u => u.email === email);
            const verificarSenha = bcrypt.compareSync(senha, usuario.senha);
            if(!verificarSenha){
                res.status(400).json({msg: "Senha invalida!"})
                return;
            }
            res.status(200).json({msg: "Senha Valida!"})
           

        } catch (error) {
            res.status(500).json({msg: "Erro interno ao verificar login do usuários", erro: error.message});
        }
    }
}