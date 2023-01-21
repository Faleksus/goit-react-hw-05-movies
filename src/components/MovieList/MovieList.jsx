import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export const MovieList = ({ movieList }) => {
  return (
    <ul className={css.movieList}>
      {Array.isArray(movieList) &&
        movieList?.map(({ id, name, title, poster_path }) => {
          return (
            <Link key={id} to={`/movies/${id}`}>
              <div className={css.movieCard}>
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
                <div className={css.containerHeader}>
                  <h3 className={css.header}>{name || title}</h3>
                </div>
              </div>
            </Link>
          );
        })}
    </ul>
  );
};

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       name: PropTypes.string,
//       title: PropTypes.string,
//     })
//   ),
// };
