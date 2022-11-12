import PropTypes from 'prop-types';
import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo';
import { Box } from 'components/Box';

export const MovieInfo = ({ movie }) => {
  const genres = movie.genres.map(genre => genre.name + ' ');
  const { title, backdrop_path, release_date, vote_average, overview } = movie;
  return (
    <>
      <Box display="flex" justifyContent="center" mb={5}>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
          width="600px"
        />
        <Box ml={5}>
          <h2>
            {title} ({Number.parseInt(release_date)})
          </h2>
          <p>User score: {(Number(vote_average) * 10).toFixed(0)}%</p>
          <b>Overview</b>
          <p>{overview}</p>
          <b>Genres</b>
          <p>{genres}</p>
        </Box>
      </Box>
      <AditionalInfo />
    </>
  );
};
MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};
