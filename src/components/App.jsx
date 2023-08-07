// import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import API from './GetApi/GetApi';
import Home from 'pages/Home/Home';
import Layout from './Layout/Layout';
import Movies from 'pages/Movies/Movies';
import MoviesDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Review from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
