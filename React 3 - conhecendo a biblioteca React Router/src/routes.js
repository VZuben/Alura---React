import ListaAnimes from 'pages/ListaAnimes';
import NotFound from 'pages/NotFound';
import PaginaAnime from 'pages/PaginaAnime';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListaAnimes />} />
        <Route path='anime/:title2' element={<PaginaAnime />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}