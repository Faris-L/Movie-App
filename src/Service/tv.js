import { tmdbApi } from "./api";


export async function getPopularTv(page = 1) {
  const { data } = await tmdbApi.get("/tv/popular", { params: { page } });
  return data;
}


export async function getTopRatedTv(page = 1) {
  const { data } = await tmdbApi.get("/tv/top_rated", { params: { page } });
  return data;
}


export async function getTvDetails(id) {
  const { data } = await tmdbApi.get(`/tv/${id}`, {
    params: {
      append_to_response: "credits,recommendations,images",
      include_image_language: "en,null",
    },
  });
  return data;
}


export async function getTvGenres() {
  const { data } = await tmdbApi.get("/genre/tv/list");
  return data.genres ?? [];
}

export async function discoverTv({
  page = 1,
  genreId,
  sortBy = "popularity.desc",
  year,
} = {}) {
  const { data } = await tmdbApi.get("/discover/tv", {
    params: {
      page,
      with_genres: genreId || undefined,
      sort_by: sortBy,
      first_air_date_year: year || undefined,
      include_adult: false,
    },
  });
  return data;
}
