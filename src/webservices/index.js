import axios from "axios";
import { BASE_URL } from "../config/api";

export function configureAxios() {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
}

export function fetchMovies(page) {
  return axios.get('/movie', {
    params: {
      sort_by: 'popularity.desc',
      api_key: 'd7873befdfa24c79ae93d005a7621ef0',
      language: 'en-EN',
      region: 'ES',
      primary_release_year: '2019', // 1900 (to force no results)
      page
    }
  });
}
