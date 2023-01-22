import Loader from "components/Loader/Loader";
import Notiflix from "notiflix";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/api";
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

  console.log(movieReviews);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.list}>
        {Array.isArray(movieReviews) &&
          movieReviews?.map(({ id, author, name, username, avatar_path }) => {
            return (
              <li key={id} className={css.item}>
                {/* <img
                  className={css.img}
                  src={avatar_path ? `https://image.tmdb.org/t/p/w500${avatar_path}` : "https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png"}
                  alt={author}
                /> */}
                <h3 className={css.headerCast}>{author}</h3>
                <h3 className={css.headerCast}>{username}</h3>

              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Reviews;
