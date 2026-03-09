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

    /* ATIVIDADE */

    static buscarPorOrdem(){
        const sql = `SELECT * FROM alunos ORDER BY nome`;
        return db.query(sql);
    }

    static buscarPorRank(){
        const sql = `SELECT * FROM alunos ORDER BY nota DESC`;
        return db.query(sql);
    }

    static buscarPorNomeNota(){
        const sql = `SELECT nome, nota FROM alunos`;
        return db.query(sql);
    }

    static buscarCursos(){
        const sql = `SELECT DISTINCT curso FROM alunos`;
        return db.query(sql);
    }

    static buscarParteNome(nome){
        const sql = `SELECT * FROM alunos WHERE lower(nome) LIKE lower($1)`;
        return db.query(sql, [`${nome}%`]);
    }

    static buscarNotasMaiores(nota){
        const sql = `SELECT * FROM alunos WHERE nota > $1`;
        return db.query(sql, [nota]);
    }

    static buscarEntreValores(min, max){
        const sql = `SELECT * FROM alunos WHERE nota BETWEEN $1 AND $2`;
        return db.query(sql, [min, max]);
    }

    static buscarMedia(){
        const sql = `SELECT ROUND(AVG(nota), 2) as Media FROM alunos`;
        return db.query(sql);
    }

    static buscarMaiorMenor(){
        const sql = `SELECT MAX(nota) AS Maior, MIN(nota) as Menor FROM alunos`;
        return db.query(sql);
    }

    static buscarAlunosCurso(){
        const sql = `SELECT curso, COUNT(*) as QTD_Alunos FROM alunos GROUP BY curso`;
        return db.query(sql);
    }

    static buscarTopMaiores(){
        const sql = `SELECT * FROM alunos ORDER BY nota DESC LIMIT 3`;
        return db.query(sql);
    }

    static buscarTopMenor(){
        const sql = `SELECT * FROM alunos ORDER BY nota ASC LIMIT 1`;
        return db.query(sql);
    }

    static buscarComStatus(){
        const sql = `SELECT *, CASE WHEN nota >= 7 THEN 'Aprovado' ELSE 'Reprovado' END AS status FROM alunos;`
        return db.query(sql);
    }

    static buscarMediaPorCurso(){
        const sql = `SELECT curso, AVG(nota) AS Media FROM alunos GROUP BY curso ORDER BY Media DESC;`
        return db.query(sql);
    }
    static buscarRankCompleto(){
        const sql = `SELECT * FROM alunos ORDER BY nota DESC;`
        return db.query(sql);
    }


}