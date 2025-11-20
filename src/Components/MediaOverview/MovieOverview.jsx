import { useState, useMemo } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getMovieGenres, discoverMovies } from "../../Service/movie.js";
import { getPosterUrl } from "../../Service/api.js";

import SearchBar from "../SearchBox/SearchBar";

import {
  Wrapper,
  Section,
  SectionTitle,
  GenresGrid,
  GenreItem,
  MoviesGrid,
  MovieCard,
  MovieImage,
  MovieName,
  LoadMoreBtn,       
} from "./MovieOverview.styled";

export default function MovieOverview() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { data: genres } = useQuery({
    queryKey: ["movie-genres"],
    queryFn: getMovieGenres,
  });

  const {
    data: genreMovies,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["genre-movies", selectedGenre],
    enabled: !!selectedGenre,
    queryFn: ({ pageParam = 1 }) =>
      discoverMovies({ genreId: selectedGenre, page: pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined; 
    },
  });

  const movies = useMemo(
    () =>
      genreMovies?.pages.flatMap((page) => page.results) ?? [],
    [genreMovies]
  );

  const filteredMovies = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return movies;
    return movies.filter((m) =>
      m.title?.toLowerCase().includes(q)
    );
  }, [movies, search]);

  return (
    <Wrapper>
      <Section>
        <SectionTitle>Movie Genres</SectionTitle>

        <GenresGrid>
          {genres?.map((g) => (
            <GenreItem
              key={g.id}
              onClick={() => {
                setSelectedGenre(g.id);
                setSearch("");
              }}
              className={g.id === selectedGenre ? "active" : ""}
            >
              {g.name}
            </GenreItem>
          ))}
        </GenresGrid>
      </Section>

      {selectedGenre && (
        <Section>
          <SectionTitle>
            Movies in {genres.find((g) => g.id === selectedGenre)?.name}
          </SectionTitle>

          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search movies by title..."
          />

          {isLoading && !genreMovies && <p>Loading…</p>}
          {isError && <p>Failed to load movies.</p>}

          <MoviesGrid>
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                onClick={() => navigate(`/media/movie/${movie.id}`)}
              >
                <MovieImage
                  src={getPosterUrl(movie.poster_path)}
                  alt={movie.title}
                />
                <MovieName>{movie.title}</MovieName>
              </MovieCard>
            ))}
          </MoviesGrid>

          {hasNextPage && (
            <LoadMoreBtn
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? "Loading..." : "Load more"}
            </LoadMoreBtn>
          )}
        </Section>
      )}
    </Wrapper>
  );
}
