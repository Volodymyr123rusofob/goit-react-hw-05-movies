import style from './movies.module.css';
import { NavLink, useLocation } from 'react-router-dom';

export const Movies = ({ listMovi, url }) => {
  const location = useLocation();
  const renderMoviList = () => {
    return listMovi.map(({ title, id }) => {
      return (
        <li className={style.li} key={id}>
          <NavLink
            className={style.link}
            to={url ? `${url}/${id}` : `${id}`}
            state={{ from: location }}
          >
            {title}
          </NavLink>
        </li>
      );
    });
  };

  return <>{renderMoviList()}</>;
};
