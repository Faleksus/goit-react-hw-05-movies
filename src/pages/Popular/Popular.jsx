import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Notiflix from "notiflix";
import { getMoviePopular } from "services/api";
import Loader from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import css from "./Popular.module.css";

function Popular() {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchPopular = async () => {
      try {
        const moviesPopular = await getMoviePopular();
        setPopular(moviesPopular);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopular();
  }, []);

  useEffect(() => {
    if (error === null) return;
    Notiflix.Notify.failure(`Something went wrong: ${error}`);
  }, [error]);
  return (
    <div className={css.containerPopular}>
      <ul>
        <li key={popular.id}>
          <h2 className={css.headerPopular}>
            List of the current popular movies
          </h2>
          {isLoading && <Loader />}
          <MovieList movieList={popular} />
        </li>
      </ul>
    </div>
  );
}

export default Popular;

Popular.propTypes = {
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
