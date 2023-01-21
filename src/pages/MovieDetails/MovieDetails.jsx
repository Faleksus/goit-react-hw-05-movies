import Loader from "components/Loader/Loader";
import Notiflix from "notiflix";
import Cast from "pages/Cast/Cast";
import Reviews from "pages/Reviews/Reviews";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { getMovieDetails } from "services/api";
import css from "./MovieDetails.module.css";

function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    const fetchDetails = async (id) => {
      try {
        const movieInfo = await getMovieDetails(id);
        setMovieInfo(movieInfo);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error === null) return;
    Notiflix.Notify.failure(`Something went wrong: ${error}`);
  }, [error]);

  return (
    <div className={css.containerMovieDetails}>
      {/* <Link to={location?.state?.from ?? '/'}>go back</Link> */}
      {isLoading && <Loader />}
      <div>
        {movieInfo !== null && (
          <div>
            <div>
              <img
                src={
                  movieInfo?.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieInfo?.poster_path}`
                    : "https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png"
                }
                alt={movieInfo.title}
                className={css.img}
              />
            </div>
            <div className={css.info}>
              <h1>
                {movieInfo.title} ({movieInfo?.release_date.slice(0, 4)})
              </h1>
              <p className={css.useScore}>User Score: {movieInfo?.vote_average}</p>
              <h2>Overview</h2>
              <p className={css.overview}>{movieInfo.overview}</p>
              <h2>Genres</h2>
              <ul className={css.genre}>
                {movieInfo?.genres?.map(({ id, name }) => {
                  return (
                    <li key={id} className={css.genreItem}>
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
        <div className={css.moreInfo}>
          <h2>More info</h2>
          <Link
            // state={{ from: location?.state?.from ?? '/' }}
            className={css.moreInfoLink}
            to="reviews"
          >
            Reviews
          </Link>
          <Link
            // state={{ from: location?.state?.from ?? '/' }}
            className={css.moreInfoLink}
            to="cast"
          >
            Cast
          </Link>

          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
