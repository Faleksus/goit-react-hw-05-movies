import Loader from "components/Loader/Loader";
import Notiflix from "notiflix";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  console.log(movieCast);

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
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                />
                <h3>{original_name}</h3>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Cast;
