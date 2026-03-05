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
        const sql = `SELECT * FROM alunos WHERE id = $1 ORDER BY id`;
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

    static buscarPorCurso(curso){
        const sql = `SELECT * FROM alunos WHERE LOWER(curso) = LOWER($1)`;
        return db.query(sql, [curso]);
    }

    static buscarPorAprovados(){
        const sql = `SELECT * FROM alunos WHERE nota >= 7`;
        return db.query(sql);
    }

    static buscarPorReprovados(){
        const sql = `SELECT * FROM alunos WHERE nota < 7`;
        return db.query(sql);
    }

    static buscarPorMaior(){
        const sql = `SELECT * FROM alunos ORDER BY nota DESC LIMIT 1`;
        return db.query(sql);
    }

    static buscarPorRecuperacao(){
        const sql = `SELECT * FROM alunos WHERE nota BETWEEN 3 AND 6`;
        return db.query(sql);
    }
}