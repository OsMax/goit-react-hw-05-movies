import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import API from 'components/GetApi/GetApi';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    API.getMoviesDetail(movieId).then(result => {
      setMovie(result.data);
      setLoading(false);
    });
  }, [movieId]);
  return (
    <>
      <Link to={location.state?.from ?? '/movies'} className={css.back}>
        ⇦ Go back
      </Link>
      {loading && <Loader />}
      {movie && (
        <div className={css.container}>
          <div className={css.info}>
            <div className={css.imgCont}>
              <img
                className={css.imgInfo}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                    : require('../../images/no-img.jpg')
                }
                alt={movie.title}
              />
            </div>
            <div className={css.infoCont}>
              <h2 className={css.detailsTitle}>{`${movie.title} (${
                movie.release_date
                  ? new Date(movie.release_date).getFullYear()
                  : 'No date'
              })`}</h2>
              <p className={css.inf}>
                <span>User score:</span>{' '}
                {`${Math.round(movie.vote_average * 10)}%`}
              </p>
              <p className={css.inf}>
                <span>Overview: </span>
                {movie.overview}
              </p>
              <p className={css.inf}>
                <span>Genres: </span>
                {movie.genres
                  ?.map(genre => {
                    return '#' + genre.name;
                  })
                  .join('   ')}
              </p>
            </div>
          </div>
          <ul className={css.moreInfoLinks}>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="review" state={location.state}>
                Review
              </Link>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MoviesDetails;
