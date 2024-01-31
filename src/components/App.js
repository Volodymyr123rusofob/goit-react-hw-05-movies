import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { NotFound } from 'pages/NotFoundPage';
import { CastPage } from 'components/Cast/Cast';
import { ReviewsPage } from 'components/Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

import style from './app.module.css';

const App = () => {
  return (
    <div className={style.div}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
