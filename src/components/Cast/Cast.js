import { useEffect, useState } from 'react';
import API from 'components/GetApi/GetApi';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    API.getMoviesCast(movieId).then(info => {
      setCast(info.data.cast);
      setLoading(false);
    });
  }, [movieId]);
  return (
    <>
      <h2 className={css.castTitle}>Cast:</h2>
      {loading && <Loader />}
      {cast.length > 0 && (
        <ul className={css.castLists}>
          {cast.map(elem => {
            return (
              <li key={elem.id} className={css.castList}>
                <img
                  src={
                    elem.profile_path
                      ? `https://image.tmdb.org/t/p/w200${elem.profile_path}`
                      : require('../../images/no-img.jpg')
                  }
                  alt={elem.name}
                />
                <h4>{elem.name}</h4>
                <h4>{`(${elem.character})`}</h4>
              </li>
            );
          })}
        </ul>
      )}
      {!loading && cast.length === 0 && <h3>There are no cast!!!</h3>}
    </>
  );
};

export default Cast;
