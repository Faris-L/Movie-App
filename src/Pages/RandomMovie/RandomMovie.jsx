// src/Pages/Random/RandomMovies.jsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRandomMovie } from "../../Service/random";
import { getPosterUrl } from "../../Service/api";
import { useNavigate } from "react-router-dom";

import {
  RandomWrapper,
  RandomCard,
  Poster,
  Info,
  Title,
  Overview,
  Meta,
  ButtonRow,
  ReloadBtn,
  DetailsBtn,
} from "./random.styled";

export default function RandomMovies() {
  const navigate = useNavigate();
  const [seed, setSeed] = useState(1);

  const { data: movie, isLoading, isError } = useQuery({
    queryKey: ["random-movie", seed],
    queryFn: getRandomMovie,
  });

  if (isLoading) return <RandomWrapper>Loading random movie…</RandomWrapper>;
  if (isError || !movie)
    return <RandomWrapper>Failed to load random movie.</RandomWrapper>;

  return (
    <RandomWrapper>
      <RandomCard>
        <Poster src={getPosterUrl(movie.poster_path)} alt={movie.title} />

        <Info>
          <Title>{movie.title}</Title>

          <Meta>
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>{movie.release_date?.slice(0, 4)}</span>
          </Meta>

          <Overview>
            {movie.overview?.length > 280
              ? movie.overview.slice(0, 280) + "..."
              : movie.overview}
          </Overview>

          <ButtonRow>
            <DetailsBtn onClick={() => navigate(`/media/movie/${movie.id}`)}>
              View Details →
            </DetailsBtn>

            <ReloadBtn onClick={() => setSeed(seed + 1)}>
              New Random Movie 🔄
            </ReloadBtn>
          </ButtonRow>
        </Info>
      </RandomCard>
    </RandomWrapper>
  );
}
