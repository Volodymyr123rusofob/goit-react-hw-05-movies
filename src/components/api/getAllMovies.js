import axios from 'axios';

const KEY = '084cac21fa8da555b8514354e192246a';
const URL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: `${URL}`,
  params: {
    api_key: `${KEY}`,
  },
});

//$ популярні фільми
export const trendMoviesToday = () => {
  return instance.get('trending/movie/day');
};

//$запит за повною інфо про фільм
export const movieDetails = async id => {
  const movies = instance.get(`movie/${id}?language=en-US`);
  return movies;
};

//$ пошук фільмів за ключ словом
export const searchMovies = async search => {
  const movies = instance.get(
    `search/movie?include_adult=false&language=en-US&page=1&query=${search}`
  );
  return movies;
};

//$ запит на акторський склад
export const getCredits = async id => {
  const movies = instance.get(`movie/${id}/credits?language=en-US`);
  return movies;
};

// $запит оглядів
export const getReviews = async id => {
  const movies = instance.get(`movie/${id}/reviews?language=en-US&page=1`);
  return movies;
};
