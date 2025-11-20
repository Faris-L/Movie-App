import { useState, useMemo } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getTvGenres, discoverTv } from "../../Service/tv.js";
import { getPosterUrl } from "../../Service/api.js";
import { useNavigate } from "react-router-dom";
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
} from "./tvoverwiev.styled.js";

export default function TvOverview() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { data: genres } = useQuery({
    queryKey: ["tv-genres"],
    queryFn: getTvGenres,
  });

  const {
    data: genreShows,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["tv-genre-shows", selectedGenre],
    enabled: !!selectedGenre,
    queryFn: ({ pageParam = 1 }) =>
      discoverTv({ genreId: selectedGenre, page: pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const shows = useMemo(
    () => genreShows?.pages.flatMap((page) => page.results) ?? [],
    [genreShows]
  );

  const filteredShows = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return shows;
    return shows.filter((s) =>
      (s.name || s.original_name || "").toLowerCase().includes(q)
    );
  }, [shows, search]);

  return (
    <Wrapper>
      <Section>
        <SectionTitle>TV Show Genres</SectionTitle>

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
            TV Shows in {genres.find((g) => g.id === selectedGenre)?.name}
          </SectionTitle>

          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search TV shows..."
          />

          {isLoading && !genreShows && <p>Loading…</p>}
          {isError && <p>Failed to load TV shows.</p>}

          <MoviesGrid>
            {filteredShows.map((show) => (
              <MovieCard
                key={show.id}
                onClick={() => navigate(`/media/tv/${show.id}`)}
              >
                <MovieImage
                  src={getPosterUrl(show.poster_path)}
                  alt={show.name || show.original_name}
                />
                <MovieName>{show.name || show.original_name}</MovieName>
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
