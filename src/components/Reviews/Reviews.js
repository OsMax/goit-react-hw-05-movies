import { useParams } from 'react-router-dom';
import API from 'components/GetApi/GetApi';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    API.getMoviesRevievs(movieId).then(info => {
      setReviews(info.data.results);
      setLoading(false);
    });
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(elem => {
            return (
              <li key={elem.id}>
                <h3>
                  <span>Author: </span>
                  {elem.author}
                </h3>
                <p>{elem.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {reviews.length === 0 && <h3>There are no reviews!!!</h3>}
    </>
  );
};

export default Review;
