import { useState, useEffect } from "react";
import FilmeTable from "../../components/FilmeTable/FilmeTable.jsx";
import FilmeForm from "../../components/FilmeForm/FilmeForm.jsx";

import {
  listarFilmes,
  criarFilme,
  atualizarFilme,
  deletarFilme,
  buscarFilmeId,
} from "../../../services/filmeService.js";

export default function AdminFilmesPage() {
  const [filmes, setFilmes] = useState([]);
  const [filmeEmEdicao, setFilmeEmEdicao] = useState(null);

  async function carregarFilmes() {
    try {
      const response = await listarFilmes();
      setFilmes(response.data.filmes);
    } catch (error) {
      console.error("Erro interno ao carregar filmes:", error);
    }
  }
  useEffect(() => {
    carregarFilmes();
  }, []);

  async function salvarFilme(dados) {
    try {
      if (filmeEmEdicao) {
        await atualizarFilme(filmeEmEdicao.id, dados);
        setFilmeEmEdicao(null);
      } else {
        await criarFilme(dados);
      }
      await carregarFilmes();
    } catch (error) {
      console.error("Erro interno ao salvar o filme");
    }
  }

  async function excluirFilme(id) {
    try {
      await deletarFilme(id);
      await carregarFilmes();
    } catch (error) {
      console.error("Erro interno ao deletar o filme");
    }
  }

  function editarFilme(filme) {
    setFilmeEmEdicao(filme);
  }

  function cancelarEdicao() {
    setFilmeEmEdicao(null);
  }

  return (
    <>
      <h1>Administração de Filmes</h1>
      <p>Cadastre, edite e exclua filmes do catálogo.</p>
      <FilmeForm
        onSalvar={salvarFilme}
        filmeEmEdição={filmeEmEdicao}
        onCancelar={cancelarEdicao}
      />

      <FilmeTable
        filmes={filmes}
        onEditar={editarFilme}
        onExcluir={excluirFilme}
      />
    </>
  );
}
