import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Notiflix from "notiflix";
import Loader from "components/Loader/Loader";
import { getMovieCredits } from "services/api";
import css from "./Cast.module.css";

function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    const fetchCast = async (id) => {
      try {
        const movieCast = await getMovieCredits(id);
        setMovieCast(movieCast);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error === null) return;
    Notiflix.Notify.failure(`Something went wrong: ${error}`);
  }, [error]);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.list}>
        {Array.isArray(movieCast) &&
          movieCast?.map(({ id, original_name, profile_path }) => {
            return (
              <li key={id} className={css.item}>
                <img
                  className={css.img}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : "https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png"
                  }
                  alt={original_name}
                />
                <h3 className={css.headerCast}>{original_name}</h3>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string,
};
