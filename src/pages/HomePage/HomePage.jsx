// import style from './homePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <h1>Hello</h1>
      <ul>
        <li>
          <p>
            1 <NavLink to="/movies/:id">Details</NavLink>
          </p>
        </li>
        <li>
          <p>
            2 <NavLink to="/movies/:Id">Details</NavLink>
          </p>
        </li>
        <li>
          <p>
            3 <NavLink to="/movies/:Id">Details</NavLink>
          </p>
        </li>
        <li>
          <p>
            4 <NavLink to="/movies/:Id">Details</NavLink>
          </p>
        </li>
        <li>
          <p>
            5 <NavLink to="/movies/:Id">Details</NavLink>
          </p>
        </li>
        <li>
          <p>
            6 <NavLink to="/movies/:Id">Details</NavLink>
          </p>
        </li>
        <li>
          <p>
            7 <NavLink to="/movies/:Id">Details</NavLink>
          </p>
        </li>
        <li>
          <p>
            8 <NavLink to="/movies/:Id">Details</NavLink>
          </p>
        </li>
        <li>
          <p>
            9 <NavLink to="/movies/:Id">Details</NavLink>
          </p>
        </li>
        <li>
          <p>
            1 <NavLink to="/movies/:Id">Details</NavLink>0
          </p>
        </li>
      </ul>
    </main>
  );
};
<NavLink to="/movies/:id">Details</NavLink>;
export default HomePage;
