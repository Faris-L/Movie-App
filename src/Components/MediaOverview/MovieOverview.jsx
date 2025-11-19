import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getMovieGenres, discoverMovies } from "../../Service/movie.js";
import { getPosterUrl } from "../../Service/api.js";

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
} from "./MovieOverview.styled";

export default function MovieOverview() {
  const [selectedGenre, setSelectedGenre] = useState(null);


  const { data: genres } = useQuery({
    queryKey: ["movie-genres"],
    queryFn: () => getMovieGenres(),
  });


  const { data: genreMovies, isLoading } = useQuery({
    queryKey: ["genre-movies", selectedGenre],
    queryFn: () => discoverMovies({ genreId: selectedGenre }),
    enabled: !!selectedGenre, 
  });

  return (
    <Wrapper>
  
      <Section>
        <SectionTitle>Movie Genres</SectionTitle>

        <GenresGrid>
          {genres?.map((g) => (
            <GenreItem
              key={g.id}
              onClick={() => setSelectedGenre(g.id)}
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

          {isLoading && <p>Loading…</p>}

          <MoviesGrid>
            {genreMovies?.results?.map((movie) => (
              <MovieCard key={movie.id}>
                <MovieImage
                  src={getPosterUrl(movie.poster_path)}
                  alt={movie.title}
                />
                <MovieName>{movie.title}</MovieName>
              </MovieCard>
            ))}
          </MoviesGrid>
        </Section>
      )}
    </Wrapper>
  );
}
