import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'components/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Box } from 'components/Box';
import { GoBackLink } from './MovieDetails.styled';
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';
  useEffect(() => {
    (async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovie(details);
      } catch (error) {
        alert('Oops, something went wrong, try again');
      }
    })();
  }, [movieId]);

  if (!movie) return null;

  return (
    <Box display="flex" flexDirection="column">
      <GoBackLink to={goBackLink}>&#8617; Go Back</GoBackLink>
      <MovieInfo movie={movie}></MovieInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default MovieDetails;
