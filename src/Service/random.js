import { tmdbApi } from "./api";

export async function getRandomMovie() {
  const randomPage = Math.floor(Math.random() * 50) + 1;

  const { data } = await tmdbApi.get("/discover/movie", {
    params: {
      page: randomPage,
      sort_by: "popularity.desc",
    },
  });

  const movies = data.results;
  return movies[Math.floor(Math.random() * movies.length)];
}
