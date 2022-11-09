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
        setReviews(reviews.results);
      } catch (error) {
        alert('Oops, something went wrong, try again');
      }
    })();
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <p>
      {reviews.length > 0
        ? reviews.map(review => (
            <div key={review.id}>
              <b>{review.author}</b>
              <p>{review.content}</p>
            </div>
          ))
        : "We don't have any reviews for this movie"}
    </p>
  );
};
