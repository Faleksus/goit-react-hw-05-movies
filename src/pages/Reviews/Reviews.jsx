import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Notiflix from "notiflix";
import { getMovieReviews } from "services/api";
import Loader from "components/Loader/Loader";
import css from "./Reviews.module.css";

function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    const fetchReviews = async (id) => {
      try {
        const movieReviews = await getMovieReviews(id);
        setMovieReviews(movieReviews);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error === null) return;
    Notiflix.Notify.failure(`Something went wrong: ${error}`);
  }, [error]);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.list}>
        {Array.isArray(movieReviews) &&
          movieReviews?.map(({ id, author, author_details }) => {
            return (
              <li key={id} className={css.item}>
                <img
                  className={css.img}
                  src={
                    author_details.avatar_path
                      ? `https://image.tmdb.org/t/p/w500${author_details.avatar_path}`
                      : "https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png"
                  }
                  alt={author_details.name}
                />
                <div className={css.headerBlock}>
                  <h3 className={css.headerReviews}>Author: {author}</h3>
                  <p className={css.headerReviews}>
                    Username: {author_details.username}
                  </p>
                  <p className={css.headerReviews}>
                    Rating: {author_details.rating}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Reviews;

Reviews.propTypes = {
  movieId: PropTypes.string,
};
