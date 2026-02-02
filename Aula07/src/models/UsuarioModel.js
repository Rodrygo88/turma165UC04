import { usuarios } from "../data/banco.js";

export class UsuarioModel{

    static listarUsuarios(){
        return usuarios
    }

    static buscarPorId(id){
        return usuarios.find(u => u.id === id);
    }

    static criar(usuario){
        usuarios.push(usuario);
        return usuario
    }
};
