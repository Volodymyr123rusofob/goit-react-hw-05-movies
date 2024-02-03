import style from './movieDetails.module.css';
import { Link, Outlet } from 'react-router-dom';
import { movieDetails } from 'components/api/getAllMovies';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export const MovieDetails = () => {
  const [detailsMovie, setDetailsMovie] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  console.log(location);

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
      <div className={style.div}>
        <Link className={style.linkBack} to={backLinkRef.current}>
          GoBack
        </Link>
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
