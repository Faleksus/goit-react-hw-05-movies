import React from 'react'
import Notiflix from "notiflix";
import { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingMovies } from '../../services/api';

export const HomePage = () => {
  const [ movies, setMovies ] = useState([]);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const componentDidUpdate = async () => {
      try {
        const movies = await getTrendingMovies();
        console.log(movies);
        setMovies(movies);

      } catch (error) {
        Notiflix.Notify.success(`Movies with this name not found :${movies}`);
        setError(error);
      } finally {

      }
    };

    componentDidUpdate();
  }, [movies, error]);


  return (
    <div films={movies}>HomePage </div>
  )
}

export default HomePage