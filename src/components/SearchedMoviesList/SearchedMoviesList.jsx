import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  TrendFilmList as SearchedFilmList,
  TrendFilmItem as SearchFilmItem,
  TrendFilmLink as SearchFilmLink,
  MovieTitle,
} from 'pages/HomePage/Home.styled';

export const SearchedMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <SearchedFilmList>
      {movies.map(({ id, poster_path, title }) => (
        <SearchFilmItem key={id}>
          <SearchFilmLink to={`${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            <MovieTitle>{title}</MovieTitle>
          </SearchFilmLink>
        </SearchFilmItem>
      ))}
    </SearchedFilmList>
  );
};

SearchedMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
