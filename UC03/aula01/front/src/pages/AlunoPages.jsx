import { useEffect, useState } from "react";

import ListaALunos from "../components/listaAlunos/ListaAlunos";
import { listarAlunos, criarAluno, atualizarAluno, excluirAluno } from "../services/alunoService";
import FormAluno from "../components/formAluno/formAluno";

import styles from "../pages/AlunoPages.module.css";


export default function AlunosPage(){
    const [alunos, setAlunos] = useState([]);
    const [alunoEmEdicao, setAlunoEmEdicao] = useState([]);

    async function carregarAlunos() {
        try {
            const response = await listarAlunos();
            setAlunos(response.data.alunos);
        } catch (error) {
            console.log("Erro ao carregar alunos: ", error.message);
        }
    }

    useEffect(() => {
        carregarAlunos();
    }, []);

    async function salvarAluno(dados) {
        try {
            if(alunoEmEdicao){
                await atualizarAluno(alunoEmEdicao.id, dados)
                setAlunoEmEdicao(null);
            } else{
                await criarAluno(dados);
            }
            await carregarAlunos();
            
        } catch (error) {
            console.log("Erro ao salvar aluno:", error);
        }
    }

    async function removerAluno(id) {
        try {
            await excluirAluno(id);
            await carregarAlunos();
        } catch (error) {
            console.log("Erro ao remover aluno:", error);
        }
    }
    function editarAluno(aluno){
        setAlunoEmEdicao(aluno);
    }

    function cancelarEdicao(){
        setAlunoEmEdicao(null);
    }

    return(
        <>
        <main className={styles.main}>
            <FormAluno 
            alunoEmEdicao={alunoEmEdicao}
            onSalvar={salvarAluno}
            onCancelar={cancelarEdicao}
                />

            <ListaALunos 
                alunos={alunos}
                onEditar={editarAluno}
                onExcluir={removerAluno}
            />
        </main>
            
            
        </>
    )
}