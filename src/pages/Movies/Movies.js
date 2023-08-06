/* eslint-disable react-hooks/exhaustive-deps */
import API from 'components/GetApi/GetApi';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    const query = searchParam.get('name');
    if (!query) {
      setSearchParam({});
      return;
    }
    API.searchMovies(query).then(results => {
      setMovies(results.data.results);
    });
  }, [searchParam]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParam({ name: e.currentTarget.serchInput.value });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="serchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
