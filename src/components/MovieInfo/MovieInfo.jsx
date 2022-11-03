import { Link } from 'react-router-dom';

export const MovieInfo = ({ movie }) => {
  const genres = movie.genres.map(genre => genre.name + ' ');
  const { title, backdrop_path, release_date, vote_average, overview } = movie;
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
      />
      <div>
        <h2>
          {title} ({Number.parseInt(release_date)})
        </h2>
        <p>User score: {(Number(vote_average) * 10).toFixed(0)}%</p>
        <b>Overview</b>
        <p>{overview}</p>
        <b>Genres</b>
        <p>{genres}</p>
      </div>
      <h3>Additional information</h3>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Reviews</Link>
    </>
  );
};
