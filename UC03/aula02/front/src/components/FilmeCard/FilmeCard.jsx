import { Link } from "react-router-dom";

export default function FilmeCard({ filme }) {
  return (
    <>
      <article>
        <img src={filme.imagem_url} alt={filme.titulo} />

        <div>
          <h2>{filme.titulo}</h2>
          <p>Gênero: {filme.genero}</p>
          <p>Ano: {filme.ano}</p>
        </div>
        <Link className="botao" to={`/filmes/${filme.id}`}> Ver detalhes</Link>
      </article>
    </>
  );
}
