import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '002699e3f94dd818dabbe0fbf8378ce8';

export const fetchTrendFilm = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
