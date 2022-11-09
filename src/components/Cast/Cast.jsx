import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'components/api';
import { useParams } from 'react-router-dom';

export const Cast = () => {
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
      {cast.map(
        ({ profile_path, original_name, character, id }) =>
          profile_path && (
            <ul key={id}>
              {' '}
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="vz"
                  width={150}
                />
                <div>
                  <p>{original_name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            </ul>
          )
      )}
    </div>
  );
};
