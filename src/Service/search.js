import { tmdbApi } from "./api";

export async function searchMulti(query, page = 1) {
  const q = query?.trim();
  if (!q) {
    return { page: 1, results: [], total_pages: 1, total_results: 0 };
  }

  const { data } = await tmdbApi.get("/search/multi", {
    params: {
      query: q,
      page,
      include_adult: false,
    },
  });

  return data;
}


export async function searchMovies(query, page = 1) {
  const q = query?.trim();
  if (!q) {
    return { page: 1, results: [], total_pages: 1, total_results: 0 };
  }

  const { data } = await tmdbApi.get("/search/movie", {
    params: {
      query: q,
      page,
      include_adult: false,
    },
  });

  return data;
}


export async function searchTv(query, page = 1) {
  const q = query?.trim();
  if (!q) {
    return { page: 1, results: [], total_pages: 1, total_results: 0 };
  }

  const { data } = await tmdbApi.get("/search/tv", {
    params: {
      query: q,
      page,
      include_adult: false,
    },
  });

  return data;
}


export async function getTrending(timeWindow = "day", page = 1) {
  const { data } = await tmdbApi.get(`/trending/all/${timeWindow}`, {
    params: { page },
  });

  return data;
}
