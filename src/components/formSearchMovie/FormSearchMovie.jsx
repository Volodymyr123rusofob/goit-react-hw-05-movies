import { useState, useEffect } from 'react';
import { searchMovies } from 'components/api/getAllMovies';

const FormSearchMovie = ({ setItemMovie }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setResults(search);
    setSearch('');
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
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          name="search"
          value={search}
          onChange={handleChange}
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
