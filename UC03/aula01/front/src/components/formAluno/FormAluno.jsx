import { useEffect, useState } from "react";
import styles from "../formAluno/FormAluno.module.css"

export default function FormAluno({onSalvar, alunoEmEdicao, onCancelar}){
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [nota, setNota] = useState("");
    
    useEffect(()=>{
        if(alunoEmEdicao){
            setNome(alunoEmEdicao.nome);
            setCurso(alunoEmEdicao.curso);
            setNota(alunoEmEdicao.nota);
        } else{
            setNome("");
            setCurso("");
            setNota("");
        }
    }, [alunoEmEdicao]);

    function handleSubmit(e){
        e.preventDefault();
        onSalvar({nome,curso, nota});
        setNome("");
        setCurso("");
        setNota("");
    }
    return(
        <>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <h2 className={styles.titulo}>{alunoEmEdicao ? "Editar Aluno" : "Cadastrar Aluno"}</h2>
                <input 
                    type="text"
                    placeholder="Nome do aluno"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={styles.caixa_texto}
                />

                <input 
                    type="text"
                    placeholder="Curso"
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                    className={styles.caixa_texto}

                 />
                 <input 
                    type="number"
                    placeholder="Nota"
                    step="0.01"
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
                    className={styles.caixa_nota}
                 />

                <button type="submit" className={styles.botao_principal}> {alunoEmEdicao ? "Atualizar" : "Cadastrar"} </button>
                { alunoEmEdicao && (
                    <button onClick={onCancelar} className={styles.botao_secundario}> Cancelar </button>
                    ) 
                }
            </form>
        </>
    )
}