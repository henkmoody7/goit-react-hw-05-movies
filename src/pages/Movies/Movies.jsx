import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuerry } from 'components/api';
import { SearchedMoviesList } from 'components/SearchedMoviesList/SearchedMoviesList';
import { Input, SearchButton, SearchForm } from './Movies.styled';

export const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

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
      <SearchForm onSubmit={onSubmit}>
        <Input
          required
          id="outlined-required"
          label="movie name"
          name="movieName"
          margin="normal"
        />
        <SearchButton variant="outlined" size="large" type="submit">
          Search
        </SearchButton>
      </SearchForm>
      <SearchedMoviesList movies={searchedMovies} />
      {/* <SearchedFilmList>
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
      </SearchedFilmList> */}
    </>
  );
};
