import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuerry } from 'components/api';
import { Link, useLocation } from 'react-router-dom';

export const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();
  useEffect(() => {
    if (movieName === '') return;

    async function fetchMovie() {
      const movie = await fetchMovieByQuerry(movieName);
      setSearchedMovies(movie);
    }

    fetchMovie();
  }, [movieName]);

  const onSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.movieName.value;
    const nextParams = inputValue !== '' ? { query: inputValue } : {};
    setSearchParams(nextParams);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="movieName" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchedMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
