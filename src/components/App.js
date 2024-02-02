import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const NotFound = lazy(() => import('pages/NotFoundPage'));
const CastPage = lazy(() => import('components/Cast/Cast'));
const ReviewsPage = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
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
  );
};

export default App;
