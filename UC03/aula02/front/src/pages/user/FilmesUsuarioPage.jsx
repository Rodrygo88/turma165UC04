import FilmeList from "../../components/FilmeList/FilmeList";
import { useState, useEffect, use } from "react";
import { listarFilmes } from "../../../services/filmeService.js";
import "./FilmesUsuarioPage.css";

export default function FilmesUsuarioPage() {
  const [filmes, setFilmes] = useState([]);
  const [busca, setBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState("");

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

  const filmesOrdenados = [...filmesFiltrados].sort((a, b) => {
    if (ordenacao === "titulo-asc") {
      return a.titulo.localeCompare(b.titulo);
    }
    if (ordenacao === "titulo-desc") {
      return b.titulo.localeCompare(a.titulo);
    }

    if (ordenacao === "genero-asc") {
      return a.genero.localeCompare(b.genero);
    }
    if (ordenacao === "genero-desc") {
      return b.genero.localeCompare(a.genero);
    }

    if (ordenacao === "ano-asc") {
      return a.ano - b.ano;
    }
    if (ordenacao === "ano-desc") {
      return b.ano - a.ano;
    }

    return 0
  });

  return (
    <>
      <div className="filtros_container">
        <button className="botao_filtro" onClick={()=>setOrdenacao("titulo-asc")}>Título A-Z</button>
        <button className="botao_filtro" onClick={()=>setOrdenacao("titulo-desc")}>Título Z-A</button>

        <button className="botao_filtro" onClick={()=>setOrdenacao("genero-asc")}>Gênero A-Z</button>
        <button className="botao_filtro" onClick={()=>setOrdenacao("genero-desc")}>Gênero Z-A</button>

        <button className="botao_filtro" onClick={()=>setOrdenacao("ano-asc")}>Ano ↑</button>
        <button className="botao_filtro" onClick={()=>setOrdenacao("ano-desc")}>Ano ↓</button>

        <button className="botao_filtro" onClick={()=>setOrdenacao("")}>Limpar</button>
      </div>
      <div className="busca-container">
        <input
          type="text"
          value={busca}
          placeholder="Buscar filme..."
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>
      <FilmeList filmes={filmesOrdenados} />
    </>
  );
}
