import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from 'components/GetApi/GetApi';
import Loader from 'components/Loader/Loader';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    setLoading(true);
    API.getMoviesDetail(movieId).then(result => {
      setMovie(result.data);
      setLoading(false);
    });
  }, [movieId]);

  return (
    <>
      <Link to={location.state?.from ?? '/movies'}> Go back</Link>
      {loading && <Loader />}
      {movie && (
        <div>
          <h2>{`${movie.title} (${new Date(
            movie.release_date
          ).getFullYear()})`}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>User score: {`${Math.round(movie.vote_average * 10)}%`}</p>
          <div>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
          </div>
          <div>
            {' '}
            <h3>Genres:</h3>
            <p>{movie.genres?.map(genre => genre.name).join(' ')}</p>
          </div>
        </div>
      )}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="review">Review</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
