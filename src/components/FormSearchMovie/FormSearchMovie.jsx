import { useState, useEffect } from 'react';
import { searchMovies } from 'components/api/getAllMovies';
import { useSearchParams } from 'react-router-dom';
import { Movies } from 'components/Movies/Movies';

import style from './form.module.css';

export const FormSearchMovie = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [listMovies, setListMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const results = searchParams.get('search');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ search });
  };

  useEffect(() => {
    if (!results) return;
    const getList = async () => {
      try {
        const { data } = await searchMovies(results);
        setListMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getList();
  }, [results]);

  return (
    <main>
      {loading && <p>...Loasding</p>}
      {error && <p>Error: {error}</p>}
      <form className={style.form} onSubmit={handleSubmit}>
        <button className={style.button} type="submit">
          <span className={style.span}>Search</span>
        </button>

        <input
          name="search"
          value={search}
          onChange={handleChange}
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          required
        />
      </form>
      {listMovies.length > 0 ? <Movies listMovi={listMovies} /> : ''}
    </main>
  );
};
