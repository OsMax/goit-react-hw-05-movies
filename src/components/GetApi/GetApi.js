import consts from './consts';
import axios from 'axios';

function getTrending() {
  return axios.get(
    `${consts.MAIN_HOST}/trending/movie/day?language=en-US${consts.API_KEY}`
  );
}

function searchMovies(query) {
  return axios.get(
    `${consts.MAIN_HOST}/search/movie?query=${query}&include_adult=false&language=en-US&page=1${consts.API_KEY}`
  );
}

function getMoviesDetail(moviesId) {
  return axios.get(
    `${consts.MAIN_HOST}/movie/${moviesId}?language=en-US${consts.API_KEY}`
  );
}

function getMoviesCast(moviesId) {
  return axios.get(
    `${consts.MAIN_HOST}/movie/${moviesId}/credits?language=en-US${consts.API_KEY}`
  );
}

function getMoviesRevievs(moviesId) {
  return axios.get(
    `${consts.MAIN_HOST}/movie/${moviesId}/reviews?language=en-US&page=1${consts.API_KEY}`
  );
}

// function rebuildFilter(filter) {
//   return filter.split(' ').join('+');
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTrending,
  searchMovies,
  getMoviesDetail,
  getMoviesCast,
  getMoviesRevievs,
};
