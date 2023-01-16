import axios from "axios";

const URL = "https://api.themoviedb.org/3/";
const API_KEY = "af592fcf36199c3713f718a30eaa3789";

export async function getTrendingMovies() {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  try {
    const response = await axios.get(`${URL}/trending/all/day`);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getSearchMovies(name) {
    axios.defaults.params = {
      api_key: API_KEY,
      query: `${name}`
    };
    try {
      const response = await axios.get(`${URL}/search/movie`);
      console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }

  export async function getMovieDetails(id) {
    axios.defaults.params = {
      api_key: API_KEY,
    };
    try {
      const response = await axios.get(`${URL}/movie/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }