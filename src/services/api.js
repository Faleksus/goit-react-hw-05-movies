import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'af592fcf36199c3713f718a30eaa3789';


export async function getUser() {
    axios.defaults.params = {
        api_key: API_KEY
      };
    try {
      const response = await axios.get(`${URL}/trending/all/day`);
      console.log(response.data.results);
      return response.data.results
    } catch (error) {
      console.error(error);
    }
  }