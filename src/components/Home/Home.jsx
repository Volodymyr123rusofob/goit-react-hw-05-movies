import style from './home.module.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { trendMoviesToday } from 'components/api/getAllMovies';

export const Home = () => {
  const [listMovies, setListMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await trendMoviesToday();
        const arrayMovies = data.results;
        setListMovies(arrayMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getList();
  }, []);

  const renderMoviList = listMovies.map(({ title, id }) => {
    return (
      <li key={id} className={style.li}>
        <NavLink to={`movies/${id}`} className={style.link}>
          {title}
        </NavLink>
      </li>
    );
  });

  return (
    <div className={style.div}>
      {loading && <p className={style.pLoad}>...Loading</p>}
      {error && <p className={style.error}>Error: {error}</p>}
      <h1 className={style.h1}>Trending today</h1>
      <ul className={style.list}>{renderMoviList}</ul>
    </div>
  );
};
