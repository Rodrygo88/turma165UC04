import styles from "../listaAlunos/ListaAlunos.module.css"

export default function ListaALunos({alunos, onEditar, onExcluir}){
    if(alunos.length === 0){
        return <p>Nenhum aluno cadastrado.</p>
    }

    return (
        <>
            <table border="1" className={styles.tabela}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th> 
                        <th>Curso</th>
                        <th>Nota</th>
                        <th>Ações</th>
                    </tr>
                </thead>
        
            <tbody>
                {
                    alunos.map((aluno) =>(
                        <tr key={aluno.id} className={styles.celulas}>
                            <td>{aluno.id}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.curso}</td>
                            <td>{aluno.nota}</td>
                            <td>
                                <button className={styles.botao_principal} onClick={() => onEditar(aluno)}>Editar</button>
                                <button onClick={() => onExcluir(aluno.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </>
    )
}