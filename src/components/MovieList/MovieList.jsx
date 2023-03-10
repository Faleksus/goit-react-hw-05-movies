import PropTypes from "prop-types";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {Array.isArray(movieList) &&
        movieList?.map(({ id, name, title, poster_path }) => {
          return (
            <Link 
              state={{ from: location }}
              key={id} 
              to={`/movies/${id}`}>
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
