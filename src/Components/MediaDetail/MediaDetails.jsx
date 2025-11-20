import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../Service/movie";
import { getTvDetails } from "../../Service/tv";
import { getPosterUrl } from "../../Service/api";
import { useWatchlist } from "../../Context/watchlistContext";

import {
  DetailWrapper,
  DetailLayout,
  Poster,
  Info,
  Title,
  Meta,
  Overview,
  TagList,
  Tag,
  WatchButton,
  TrailerOverlay,
  TrailerBox,
} from "./MediaDetails.styled";

export default function MediaDetails() {
  const { type, id } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);
  const { addItem, removeItem, isInWatchlist } = useWatchlist();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["media-details", type, id],
    queryFn: () => (type === "movie" ? getMovieDetails(id) : getTvDetails(id)),
  });

  if (isLoading) return <DetailWrapper>Loading…</DetailWrapper>;
  if (isError || !data) return <DetailWrapper>Failed to load details.</DetailWrapper>;

  const title = type === "movie" ? data.title : data.name;
  const date = type === "movie" ? data.release_date : data.first_air_date;
  const runtime = type === "movie" ? data.runtime : data.episode_run_time?.[0];
  const genres = data.genres || [];

  const videos = data.videos?.results || [];
  const trailerVideo =
    videos.find((v) => v.type === "Trailer" && v.site === "YouTube") ||
    videos.find((v) => v.type === "Teaser" && v.site === "YouTube") ||
    videos[0];
  const trailer = trailerVideo?.key;

  const item = {
    id: data.id,
    title,
    poster_path: data.poster_path,
    type,
  };
  const inWatchlist = isInWatchlist(item.id);

  const handleWatchlistToggle = () => {
    if (inWatchlist) removeItem(item.id);
    else addItem(item);
  };

  return (
    <DetailWrapper>
      <DetailLayout>
        <Poster src={getPosterUrl(data.poster_path)} alt={title} />

        <Info>
          <Title>{title}</Title>

          <Meta>
            {date && <span>{date.slice(0, 4)}</span>}
            {runtime && <span>{runtime} min</span>}
            {data.vote_average && <span>⭐ {data.vote_average.toFixed(1)} / 10</span>}
            <span style={{ textTransform: "uppercase" }}>{type}</span>

            <WatchButton onClick={handleWatchlistToggle}>
              {inWatchlist ? "✔ Added to Watchlist" : "+ Add to Watchlist"}
            </WatchButton>

            {trailer && (
              <WatchButton onClick={() => setShowTrailer(true)}>▶ Watch Trailer</WatchButton>
            )}
          </Meta>

          {genres.length > 0 && (
            <TagList>
              {genres.map((g) => (
                <Tag key={g.id}>{g.name}</Tag>
              ))}
            </TagList>
          )}

          {data.overview && <Overview>{data.overview}</Overview>}
        </Info>
      </DetailLayout>

      {showTrailer && trailer && (
        <TrailerOverlay onClick={() => setShowTrailer(false)}>
          <TrailerBox onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailer}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`${title} trailer`}
            ></iframe>
          </TrailerBox>
        </TrailerOverlay>
      )}
    </DetailWrapper>
  );
}
