import { useEffect, useState } from 'react';
import API from 'components/GetApi/GetApi';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    API.getMoviesCast(movieId).then(info => setCast(info.data.cast));
  }, [movieId]);
  return (
    <>
      {cast.length > 0 && (
        <ul>
          {cast.map(elem => {
            return (
              <li key={elem.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${elem.profile_path}`}
                  alt={elem.name}
                />
                <h4>
                  <span>Name: </span>
                  {elem.name}
                </h4>
                <h4>
                  <span>Character: </span>
                  {elem.character}
                </h4>
              </li>
            );
          })}
        </ul>
      )}
      {cast.length === 0 && <h3>There are no cast!!!</h3>}
    </>
  );
};

export default Cast;
