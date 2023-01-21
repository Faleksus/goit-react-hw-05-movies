import React from "react";
import { useEffect, useState } from "react";
import Notiflix from "notiflix";
import css from "./Movies.module.css";
import { getSearchMovies } from "../../services/api";
import { MovieList } from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);

  useEffect(() => {
    if (query !== null && query.trim() === '' ) return;
    // Варіант 2
    // if (query.trim().length === 0) return;

    const fetchSearchMovies = async (query) => {
      try {
        setIsLoading(true);
        const results = await getSearchMovies(query);
        setMovies(results);
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

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.search.value});
    e.target.reset();
  };

  return (
    <div className={css.containerForm}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          name="search"
          className={css.searchFormInput}
        />
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
