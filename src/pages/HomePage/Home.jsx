import { useEffect, useState } from 'react';
import { fetchTrendFilm } from '../../components/api';
import { TrendFilmList, TrendFilmLink } from './Home.styled';
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
    <>
      <h1>Trending today</h1>
      <TrendFilmList>
        {films.map(({ id, original_title }) => (
          <li key={id}>
            <TrendFilmLink to={`movies/${id}`}>{original_title}</TrendFilmLink>
          </li>
        ))}
      </TrendFilmList>
    </>
  );
};
