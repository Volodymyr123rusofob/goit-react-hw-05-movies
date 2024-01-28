// import style from './homePage.module.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { trendMoviesToday } from 'components/app/getAllMovies';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

const HomePage = () => {
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
      <li key={id}>
        <NavLink to={`movies/${id}`}>{title}</NavLink>
      </li>
    );
  });

  return (
    <main>
      <h1>Tranding today</h1>
      <ul>{renderMoviList}</ul>
    </main>
  );
};

export default HomePage;
