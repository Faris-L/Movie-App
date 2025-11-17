import { tmdbApi } from "./api";


export async function getPopularMovies(page = 1) {
  const { data } = await tmdbApi.get("/movie/popular", { params: { page } });
  return data;
}


export async function getTopRatedMovies(page = 1) {
  const { data } = await tmdbApi.get("/movie/top_rated", { params: { page } });
  return data;
}


export async function getMovieDetails(id) {
  const { data } = await tmdbApi.get(`/movie/${id}`, {
    params: {
      append_to_response: "credits,recommendations,images",
      include_image_language: "en,null",
    },
  });
  return data; 
}


export async function getMovieGenres() {
  const { data } = await tmdbApi.get("/genre/movie/list");
  return data.genres ?? [];
}


export async function discoverMovies({
  page = 1,
  genreId,
  sortBy = "popularity.desc",
  year,
} = {}) {
  const { data } = await tmdbApi.get("/discover/movie", {
    params: {
      page,
      with_genres: genreId || undefined,
      sort_by: sortBy,
      primary_release_year: year || undefined,
      include_adult: false,
    },
  });
  return data;
}
