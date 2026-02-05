import { UsuarioModel } from "../models/UsuarioModel.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";



export class UsuarioController{
    static listarUsuarios(req, res){
        try {
            const usuario = req.usuario;
            const usuarios = UsuarioModel.listarUsuarios();
            if(!usuarios || usuarios.length === 0){
                res.status(404).json({msg: "Nenhum usuário cadastrado!"});
                return;
            }
            res.status(200).json({msg: "Usuários encontradoos", solicitante: usuario.nome, usuarios});
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
                res.status(400).json({msg: "Email ou senha invalida!"})
                return;
            }

            //Gerar um token de JWT
            const CHAVE = process.env.JWT_SECRET;
            const token = jwt.sign(
                {id: usuario.id, email: usuario.email, nome: usuario.nome}, //Informações/dados que ficaram do payload do Token
                CHAVE, // CHAVE SECRETA para assinar o Token
                {expiresIn: "1h"} //Tempo de expiração do token
            ) 

            res.cookie("token", token,{
                httpOnly: true,
                maxAge: 60 * 60 * 100,//1hora
                sameSite: "lax"
            });
            
            res.status(200).json({msg: "Login efetuado!", usuario: usuario.nome, token});
           

        } catch (error) {
            res.status(500).json({msg: "Erro interno ao verificar login do usuários", erro: error.message});
        }
    }

    static buscarPorId(req, res){
        try {
            const {id} = req.params;
            const usuario = UsuarioModel.buscarPorId(id);
            if(!usuario){
                res.status(404).json({msg: "Nenhum usuário encontrado com esse ID"});
                return;
            }
            res.status(200).json({msg: "Usuário encontrado", usuario});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao buscar usuário por Id", erro: error.message});
            
        }
    }

    static deletarUser(req, res){
        try {
            const {id} = req.params;
            const usuario = UsuarioModel.deletarUsuario(id);
            if(!usuario){
                res.status(404).json({msg: "Nenhum usuário encontrado com esse ID"});
                return;
            }
            res.status(200).json({msg: "Usuário deletado com sucesso!"});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao deletar usuário por Id", erro: error.message});
        }
    }

    static async atualizarUsuario(req, res){
        try {
            const {id} = req.params;
            const {nome, email, senha} = req.body;
            if(!nome || !email || !senha){
                res.status(400).json({msg: "Todos os campos devem ser preenchidos"});
                return;
            }

            const SALT = process.env.SALT;
            const senhaHash = await bcrypt.hash(senha, parseInt(SALT));
            const novosDados = {
                id: id,
                nome: nome,
                email: email,
                senha: senhaHash
            }

            const usuarioAtualizado = UsuarioModel.atualizarUsuario(id, novosDados);
            if(!usuarioAtualizado){
                res.status(404).json({msg: "Nenhum usuário encontrado"});
                return;
            }
            res.status(201).json({msg:"Usuário Atualizado com sucesso", usuarioAtualizado});

        } catch (error) {
            res.status(500).json({msg: "Erro interno ao atualizar usuário", erro: error.message});
        }
    }

    static async atualizarParcialmente(req,res){
        try {
            const {id} = req.params;
            const campos = {...req.body}; //Pode conter nome, email ou senha...

            if(!campos){
                res.status(400).json({msg: "Nenhum valor recebido para atualizar"});
                return;
            }

            if(campos.senha){
                const SALT = process.env.SALT;
                campos.senha = await bcrypt.hash(campos.senha, parseInt(SALT));
            }

            const usuarioAtualizado = UsuarioModel.atualizarUsuario(id, campos);
            if(!usuarioAtualizado){
                res.status(404).json({msg: "Nenhum usuario encontrado"});
                return;
            }
            res.status(201).json({msg:"Usuario atualizado com sucesso", usuarioAtualizado});
        } catch (error) {
             res.status(500).json({msg: "Erro interno ao atualizar parcialmente usuário", erro: error.message});
        }
    }
}