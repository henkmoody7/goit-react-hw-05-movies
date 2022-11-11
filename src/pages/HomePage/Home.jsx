import { useEffect, useState } from 'react';
import { fetchTrendFilm } from '../../components/api';
import {
  TrendFilmList,
  TrendFilmLink,
  TrendFilmItem,
  MovieTitle,
} from './Home.styled';
export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    if (!films) return;
    (async () => {
      try {
        const films = await fetchTrendFilm();
        setFilms(films);
      } catch (error) {
        alert('Oops, something went wrong, try again');
      }
    })();
  });
  return (
    <main>
      <h1>Trending today</h1>
      <TrendFilmList>
        {films.map(({ id, poster_path, title }) => (
          <TrendFilmItem key={id}>
            <TrendFilmLink to={`movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
              <MovieTitle>{title}</MovieTitle>
            </TrendFilmLink>
          </TrendFilmItem>
        ))}
      </TrendFilmList>
    </main>
  );
};
