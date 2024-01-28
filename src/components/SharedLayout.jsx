import { Outlet, NavLink } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </container>
  );
};

export default SharedLayout;
