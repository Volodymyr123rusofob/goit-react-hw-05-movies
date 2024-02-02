import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCredits } from 'components/api/getAllMovies';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await getCredits(movieId);
        const listCast = data.cast;
        setCast(listCast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getList();
  }, [movieId]);

  const castRender = () => {
    const actors = cast.map(
      ({ id, profile_path, original_name, name, character }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
              }
              alt={original_name}
            />
            <h2>{name}</h2>
            <p>{character}</p>
          </li>
        );
      }
    );
    return actors;
  };

  return (
    <ul>
      {loading && <p>...Loasding</p>}
      {error && <p>Error: {error}</p>}
      {cast?.length && castRender()}
    </ul>
  );
};

export default CastPage;
