import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdminFilmesPage from "./pages/admin/AdminFilmesPage";
import FilmesUsuarioPage from "./pages/user/FilmesUsuarioPage";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import "./index.css";
import FilmeDetalhePage from "./pages/filmeDetalhePage/filmeDetalhePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FilmesUsuarioPage />} />
          <Route path="/filmes/:id" element={<FilmeDetalhePage />} />
          <Route path="/admin" element={<AdminFilmesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
