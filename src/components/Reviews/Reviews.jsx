import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'components/api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        alert('Oops, something went wrong, try again');
      }
    })();
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return <p>rew</p>;
};
