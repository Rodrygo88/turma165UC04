import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <h1>Filmes</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>

              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
