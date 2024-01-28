// import style from './movieDetailsPage.module.css';
import { Link, Outlet } from 'react-router-dom';
import { movieDetails } from 'components/app/getAllMovies';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetailsPage = () => {
  const [detailsMovie, setDetailsMovie] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await movieDetails(movieId);
        setDetailsMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getList();
  }, []);

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = detailsMovie || {};

  return (
    <main>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <h1>{`${title}(${release_date})`}</h1>
      <p>User score: {popularity}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres?.length &&
          genres.map(({ name, id }) => <li key={id}>{name}</li>)}
      </ul>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
