import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ children, movies }) => {
  const location = useLocation();
  return (
    <div className={css.container}>
      {children}
      <ul className={css.lists}>
        {movies.map(movie => {
          return (
            <li key={movie.id} className={css.list}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                className={css.link}
              >
                <img
                  className={css.img}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                      : require('../../images/no-img.jpg')
                  }
                  alt={movie.title}
                />
                <div className={css.titleCont}>
                  <h3>{movie.title}</h3>
                  {movie.release_date && (
                    <h3>{`(${new Date(movie.release_date).getFullYear()})`}</h3>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
