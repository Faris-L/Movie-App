import axios from "axios";

const API_KEY = "d5ae292ccc0ac86b6e4d58f1adf3a9e0";

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

tmdbApi.defaults.params = {};
tmdbApi.defaults.params["api_key"] = API_KEY;
tmdbApi.defaults.params["language"] = "en-US";


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const getPosterUrl = (path, size = "w500") =>
  path ? `${IMAGE_BASE_URL}/${size}${path}` : "";

export const getBackdropUrl = (path, size = "w780") =>
  path ? `${IMAGE_BASE_URL}/${size}${path}` : "";
