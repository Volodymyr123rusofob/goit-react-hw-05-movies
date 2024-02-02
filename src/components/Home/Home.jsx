import style from './home.module.css';
import { useState, useEffect } from 'react';
import { trendMoviesToday } from 'components/api/getAllMovies';
import { Movies } from 'components/Movies/Movies';

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

  return (
    <div className={style.div}>
      {loading && <p className={style.pLoad}>...Loading</p>}
      {error && <p className={style.error}>Error: {error}</p>}
      <h1 className={style.h1}>Trending today</h1>
      <ul className={style.list}>
        {listMovies?.length && <Movies listMovi={listMovies} url="movies" />}
      </ul>
    </div>
  );
};
