import axios from "axios";

const URL = "https://api.themoviedb.org/3/";
const API_KEY = "af592fcf36199c3713f718a30eaa3789";

const moviesAPI = axios.create({
  baseURL: URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await moviesAPI.get("trending/all/week");
  return data.results;
};

export const getSearchMovies = async (query) => {
  const { data } = await moviesAPI.get("search/movie", {
    params: { query },
  });
  return data.results;
};

export const getMovieDetails = async (id) => {
  const { data } = await moviesAPI.get(`movie/${id}`);
  return data;
};

export const getMovieCredits = async (id) => {
  const { data } = await moviesAPI.get(`movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviews = async (id) => {
  const { data } = await moviesAPI.get(`movie/${id}/reviews`, {
    params: {
      page: 1,
    },
  });
  return data.results;
};

export const getMoviePopular = async () => {
  const { data } = await moviesAPI.get(`movie/popular`);
  return data.results;
};
