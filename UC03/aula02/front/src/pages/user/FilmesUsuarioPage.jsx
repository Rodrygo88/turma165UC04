import FilmeList from "../../components/FilmeList/FilmeList";
import { useState, useEffect, use } from "react";
import { listarFilmes } from "../../../services/filmeService.js";
import "./FilmesUsuarioPage.css";

export default function FilmesUsuarioPage() {
  const [filmes, setFilmes] = useState([]);
  const [busca, setBusca] = useState("");
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

  const filmesFiltrados = filmes.filter((filme) =>
    filme.titulo.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <>
      <div className="busca-container">
        <input
          type="text"
          value={busca}
          placeholder="Buscar filme..."
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>
      <FilmeList filmes={filmesFiltrados} />
    </>
  );
}
