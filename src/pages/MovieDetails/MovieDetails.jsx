import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'components/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
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
    <>
      <MovieInfo movie={movie}></MovieInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
