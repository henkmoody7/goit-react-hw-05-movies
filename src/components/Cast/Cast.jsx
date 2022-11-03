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
    // <div>
    //   {cast && (
    //     <>
    //       <img
    //         src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
    //         alt="vz"
    //       />
    //       <div>
    //         <p></p>
    //         <p></p>
    //       </div>
    //       ss
    //     </>
    //   )}
    // </div>
    <p>cdsvc</p>
  );
};
