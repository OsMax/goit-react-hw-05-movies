import API from 'components/GetApi/GetApi';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    API.getTrending().then(results => {
      setMovies(results.data.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
