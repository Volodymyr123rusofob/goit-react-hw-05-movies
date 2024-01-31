import { Outlet, NavLink } from 'react-router-dom';

import style from './sharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={style.div}>
      <header className={style.header}>
        <nav className={style.nav}>
          <NavLink className={style.link} to="/">
            Home
          </NavLink>
          <NavLink className={style.link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
