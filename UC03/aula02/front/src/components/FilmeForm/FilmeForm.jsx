import { useState, useEffect } from "react";

export default function FilmeForm({ onSalvar, filmeEmEdição, onCancelar }) {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");

  useEffect(() => {
    if (filmeEmEdição) {
      setTitulo(filmeEmEdição.titulo);
      setGenero(filmeEmEdição.genero);
      setAno(filmeEmEdição.ano);
      setImagemUrl(filmeEmEdição.imagem_url);
    } else {
      setTitulo("");
      setGenero("");
      setAno("");
      setImagemUrl("");
    }
  }, [filmeEmEdição]);

  function handleSubmit(e) {
    e.preventDefault();
    onSalvar({
      titulo,
      genero,
      ano,
      imagem_url: imagemUrl,
    });
    setTitulo("");
    setGenero("");
    setAno("");
    setImagemUrl("");
  }
  return (
    <>
      <h2>{filmeEmEdição ? "Editar Filme" : "Cadastrar Filme"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          placeholder="Titulo do filme"
        />

        <label htmlFor="genero">Genero</label>
        <input
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
          placeholder="Genero do filme"
        />

        <label htmlFor="ano">Ano</label>
        <input
          type="number"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          required
          placeholder="Ano do filme"
        />

        <label htmlFor="imagem_url">Imagem Url</label>
        <input
          type="url"
          value={imagemUrl}
          onChange={(e) => setImagemUrl(e.target.value)}
          required
          placeholder="Imagem Url do filme"
        />

        <button type="submit">
          {filmeEmEdição ? "Atualizar" : "Cadastrar"}
        </button>
        {filmeEmEdição && <button onClick={onCancelar}> Cancelar</button>}
      </form>
    </>
  );
}
