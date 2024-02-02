import style from './movies.module.css';
import { NavLink } from 'react-router-dom';

export const Movies = ({ listMovi, url }) => {
  const renderMoviList = () => {
    return listMovi.map(({ title, id }) => {
      return (
        <li className={style.li} key={id}>
          <NavLink className={style.link} to={url ? `${url}/${id}` : `${id}`}>
            {title}
          </NavLink>
        </li>
      );
    });
  };

  return <>{renderMoviList()}</>;
};
