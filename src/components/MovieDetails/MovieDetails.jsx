import style from './movieDetails.module.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { movieDetails } from 'components/api/getAllMovies';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MovieDetails = () => {
  const [detailsMovie, setDetailsMovie] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const navigate = useNavigate();

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
  }, [movieId]);

  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    original_title,
  } = detailsMovie || {};

  const movieTitle = release_date ? release_date : '';
  const titleParts = movieTitle.split('-')[0];

  const listGenres = () => {
    const genre = genres.map(({ name, id }) => (
      <li className={style.li} key={id}>
        {name}
      </li>
    ));
    return genre;
  };

  return (
    <>
      {loading && <p>...Loasding</p>}
      {error && <p>Error: {error}</p>}
      <button
        className={style.button}
        onClick={() => navigate(-1)}
        type="button"
      >
        GoBack
      </button>
      <div className={style.div}>
        <img
          className={style.img}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <h1 className={style.h1}>{`${title}(${titleParts})`}</h1>
        <p className={style.p}>User score: {Math.floor(vote_average * 10)}%</p>
        <h2 className={style.h2}>Overview</h2>
        <p className={style.p}>{overview}</p>
        <h2 className={style.h2}>Genres</h2>
        <ul className={style.list}>{genres?.length && listGenres()}</ul>
        <p className={style.p}>Additional information</p>
        <ul className={style.list}>
          <li className={style.li}>
            <Link className={style.link} to="cast">
              Cast
            </Link>
          </li>
          <li className={style.li}>
            <Link className={style.link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
