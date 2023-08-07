import API from 'components/GetApi/GetApi';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    API.getTrending().then(results => {
      setMovies(results.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {movies.length > 0 && (
            <MoviesList movies={movies}>
              <h1 className={css.title}>Trending today</h1>
            </MoviesList>
          )}
        </>
      )}
    </>
  );
};

export default Home;
