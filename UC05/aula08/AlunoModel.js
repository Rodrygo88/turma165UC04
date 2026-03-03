import db from "./src/config/db.js";

export class AlunoModel{
    static listarTodos(){
        const sql = `SELECT * FROM alunos`;
        return db.query(sql);
    }
    static criar(nome, curso, nota){
        const sql = `INSERT INTO alunos (nome, curso, nota) VALUES ($1, $2, $3)`;
        return db.query(sql, [nome, curso, nota]);
    }
    static buscarPorId(id){
        const sql = `SELECT * FROM alunos WHERE id = $1`;
        return db.query(sql,[id]);
    }
    static deletar(id){
        const sql = `DELETE FROM alunos WHERE id = $1`;
        return db.query(sql, [id]);
    }
    static atualizar(id, nome, curso, nota){
        const sql = `UPDATE alunos SET nome = $1, curso = $2, nota = $3 WHERE id = $4`;
        return db.query(sql, [nome, curso, nota, id]);
    }
}