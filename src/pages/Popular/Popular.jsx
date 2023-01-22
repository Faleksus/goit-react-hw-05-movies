import Loader from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import Notiflix from "notiflix";
import React, { useEffect, useState } from "react";
import { getMoviePopular } from "services/api";
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
          {/* {error !== null && <p>Whoops, something went wrong: {error}</p>} */}
          <MovieList movieList={popular} />
        </li>
      </ul>
    </div>
  );
}

export default Popular;
