import { Link, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/HomePage/Home';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};
