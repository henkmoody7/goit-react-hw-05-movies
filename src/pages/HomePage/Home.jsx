import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendFilm } from '../../components/api';

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
      <ul>
        {films.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
