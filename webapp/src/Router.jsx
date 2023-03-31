import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Artigo } from "./pages/Artigo/Artigo";
import { Coleta } from "./pages/Coleta/Coleta";
import { Eventos } from "./pages/Eventos/Eventos";
import { Instrucoes } from "./pages/Instrucoes/Instrucoes";
import { Noticia } from "./pages/Noticia/Noticia";
import { Noticias } from "./pages/Noticias/Noticias";
import { Projeto } from "./pages/Projeto/Projeto";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artigo" element={<Artigo />} />
      <Route path="/coleta" element={<Coleta />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/instrucoes" element={<Instrucoes />} />
      <Route path="/noticia" element={<Noticia />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/projeto" element={<Projeto />} />
    </Routes>
  );
}
