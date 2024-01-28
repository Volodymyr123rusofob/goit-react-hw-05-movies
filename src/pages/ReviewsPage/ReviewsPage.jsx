import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'components/app/getAllMovies';

const ReviewsPage = () => {
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
  }, []);
  console.log(reviews);

  const reviewsRender = () => {
    const coment = reviews.map(({ author, content }) => {
      return (
        <li key={author}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      );
    });
    return coment;
  };

  return <ul>{reviews?.length && reviewsRender()}</ul>;
};

export default ReviewsPage;
