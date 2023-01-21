import React from "react";
import PropTypes from "prop-types";
import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/api";
import { MovieList } from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";
import css from "./Home.module.css";

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchTrands = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrends(movies);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrands();
  }, []);

  useEffect(() => {
    if (error === null) return;
    Notiflix.Notify.failure(`Something went wrong: ${error}`);
  }, [error]);

  return (
    <div className={css.containerHome}>
    <ul>
      <li key={trends.id}>
        
        <h2 className={css.headerHome}>Trends of the week</h2>
        {isLoading && <Loader />}
        {/* {error !== null && <p>Whoops, something went wrong: {error}</p>} */}
        <MovieList movieList={trends} />
        
      </li>
    </ul>
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
