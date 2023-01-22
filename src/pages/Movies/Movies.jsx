import PropTypes from "prop-types";
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Notiflix from "notiflix";
import { getSearchMovies } from "../../services/api";
import { MovieList } from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";
import css from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const fetchSearchMovies = async (query) => {
      try {
        setIsLoading(true);
        const results = await getSearchMovies(query);
        setMovies(results);
        if (results.length === 0) {
          Notiflix.Notify.failure(`Movies with this name not found :${query}`);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchMovies(query);
  }, [query]);

  useEffect(() => {
    if (error === null) return;
    Notiflix.Notify.failure(`Something went wrong: ${error}`);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.search.value });
    e.target.reset();
  };

  return (
    <div className={css.containerForm}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input name="search" className={css.searchFormInput} />
        <button type="submit" className={css.searchFormBtn}>
          Search
        </button>
      </form>
      {isLoading && <Loader />}
      <MovieList movieList={movies} />
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
