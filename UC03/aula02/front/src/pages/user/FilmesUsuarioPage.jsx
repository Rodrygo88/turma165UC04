import FilmeList from "../../components/FilmeList/FilmeList";
import { useState, useEffect } from "react";
import { listarFilmes } from "../../../services/filmeService.js";

export default function FilmesUsuarioPage() {
  const [filmes, setFilmes] = useState([]);
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
  return (
    <>
      <FilmeList filmes={filmes}/>
    </>
  );
}
