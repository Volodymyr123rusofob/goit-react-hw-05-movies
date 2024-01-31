import { useState, useEffect } from 'react';
import { searchMovies } from 'components/api/getAllMovies';
import { useSearchParams } from 'react-router-dom';

import style from './form.module.css';

const FormSearchMovie = ({ setItemMovie }) => {
  const [search, setSearch] = useState('');
  // const [results, setResults] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const results = searchParams.get('search');
  console.log(search);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setResults(search);
    setSearchParams({ search });
  };

  useEffect(() => {
    if (results === '') return;

    const getList = async () => {
      try {
        const { data } = await searchMovies(results);
        setItemMovie(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getList();
  }, [results, setItemMovie]);

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
    </main>
  );
};
export default FormSearchMovie;
