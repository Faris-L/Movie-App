import axios from "axios";

const API_KEY = "37f3555f8118a7d3920e8b90c223fc1";

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const getPosterUrl = (path, size = "w500") =>
  path ? `${IMAGE_BASE_URL}/${size}${path}` : "";

export const getBackdropUrl = (path, size = "w780") =>
  path ? `${IMAGE_BASE_URL}/${size}${path}` : "";
