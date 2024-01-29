// import style from './moviesPage.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import { searchMovies } from 'components/api/getAllMovies';
import FormSearchMovie from 'components/formSearchMovie/FormSearchMovie';

const MoviesPage = () => {
  const [itemMovie, setItemMovie] = useState([]);

  const renderMoviList = () => {
    return itemMovie.map(({ title, id }) => {
      return (
        <li key={id}>
          <NavLink to={`${id}`}>{title}</NavLink>
        </li>
      );
    });
  };

  return (
    <main>
      <FormSearchMovie setItemMovie={setItemMovie} />
      <ul>
        {itemMovie.length
          ? renderMoviList()
          : 'Enter the title of the movie to search'}
      </ul>
    </main>
  );
};

export default MoviesPage;
