import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'components/api/getAllMovies';

export const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await getReviews(movieId);
        const listCast = data.results;
        setReviews(listCast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getList();
  }, [movieId]);

  const reviewsRender = () => {
    const coment = reviews.map(({ author, content, id }) => {
      return (
        <li key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      );
    });
    return coment;
  };

  return (
    <ul>
      {loading && <p>...Loasding</p>}
      {error && <p>Error: {error}</p>}
      {reviews.length ? (
        reviewsRender()
      ) : (
        <p>We don't have any reviews for this movies.</p>
      )}
    </ul>
  );
};
