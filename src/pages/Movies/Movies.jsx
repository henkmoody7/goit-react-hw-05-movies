import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuerry } from 'components/api';
import { useLocation } from 'react-router-dom';
import {
  TrendFilmList as SearchedFilmList,
  TrendFilmItem as SearchFilmItem,
  TrendFilmLink as SearchFilmLink,
  MovieTitle,
} from 'pages/HomePage/Home.styled';
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
      <SearchedFilmList>
        {searchedMovies.map(movie => (
          <SearchFilmItem key={movie.id}>
            <SearchFilmLink to={`${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </SearchFilmLink>
          </SearchFilmItem>
        ))}
      </SearchedFilmList>
    </>
  );
};
