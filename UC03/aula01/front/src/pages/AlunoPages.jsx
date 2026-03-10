import { useEffect, useState } from "react";

import ListaALunos from "../components/listaAlunos/ListaAlunos";

import { listarAlunos, criarAluno, atualizarAluno, excluirAluno } from "../services/alunoService";

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

    return(
        <>
            <ListaALunos 
                alunos={alunos}
            />
        </>
    )
}