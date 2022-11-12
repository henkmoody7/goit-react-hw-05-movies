import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'components/api';
import { useParams } from 'react-router-dom';
import { CastList, CastListItem, Character } from './Cast.styled';
const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const cast = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        alert('Oops, something went wrong, try again');
      }
    })();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <div>
      <CastList>
        {cast.map(
          ({ profile_path, original_name, character, id }) =>
            profile_path && (
              <CastListItem key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="vz"
                  width={250}
                />
                <div>
                  <b>{original_name}</b>
                  <p>
                    Character: <Character>{character}</Character>
                  </p>
                </div>
              </CastListItem>
            )
        )}
      </CastList>
    </div>
  );
};

export default Cast;
