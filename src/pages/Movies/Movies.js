/* eslint-disable react-hooks/exhaustive-deps */
import API from 'components/GetApi/GetApi';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const query = searchParam.get('name');

  useEffect(() => {
    setLoading(true);
    if (!query) {
      setSearchParam({});
      setLoading(false);
      setMovies([]);
      return;
    }
    API.searchMovies(query)
      .then(results => {
        setMovies(results.data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParam({ name: e.currentTarget.serchInput.value });
  };
  return (
    <>
      <form onSubmit={onSubmit} className={css.form}>
        <input
          name="serchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>
      </form>
      {loading && <Loader />}
      {movies.length > 0 && (
        <MoviesList movies={movies}>
          <h2 className={css.searchTitle}>Search result:</h2>
        </MoviesList>
      )}
    </>
  );
};

export default Movies;
