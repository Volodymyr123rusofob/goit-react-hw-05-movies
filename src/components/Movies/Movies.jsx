import style from './movies.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FormSearchMovie } from '../FormSearchMovie/FormSearchMovie';

export const Movies = () => {
  const [itemMovie, setItemMovie] = useState([]);

  const renderMoviList = () => {
    return itemMovie.map(({ title, id }) => {
      return (
        <li className={style.li} key={id}>
          <NavLink className={style.link} to={`${id}`}>
            {title}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <div className={style.div}>
      <FormSearchMovie setItemMovie={setItemMovie} />
      <ul className={style.list}>
        {itemMovie.length ? (
          renderMoviList()
        ) : (
          <p className={style.p}>
            Please enter the title of the movie to search
          </p>
        )}
      </ul>
    </div>
  );
};
