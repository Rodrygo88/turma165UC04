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
        return usuario;
    }

    static atualizarUsuario(id, novosDados){
        const index = usuarios.findIndex(u => u.index === id);
        if (index === -1){
            return false;
        }
        usuarios[index] = {...usuarios[index], ...novosDados};
        return usuarios[index];
    }

    static deletarUsuario(id){
        const index = usuarios.findIndex(u => u.index === id);
        if (index === -1){
            return false;
        }

        usuarios.splice(index, 1);
        return true;
    }
};
