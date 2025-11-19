import { useQuery } from "@tanstack/react-query";
import { getPosterUrl } from "../../Service/api";
import { useNavigate } from "react-router-dom";
import {
  Section,
  SectionTitle,
  HorizontalScroll,
  MediaCard,
  MediaPoster,
  MediaName,
} from "./categorylist.styled";


export default function MediaSection({ title, queryKey, queryFn, getName, mediaType }) {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({ queryKey, queryFn });
  const items = data?.results || data?.movies || data?.tv || [];

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>

      {isLoading && <p>Loading…</p>}
      {isError && <p>Failed to load data.</p>}

      <HorizontalScroll>
        {items.map((item) => (
          <MediaCard
            key={item.id}
            onClick={() => navigate(`/media/${mediaType}/${item.id}`)}
          >
            <MediaPoster
              src={getPosterUrl(item.poster_path)}
              alt={getName(item)}
            />
            <MediaName>{getName(item)}</MediaName>
          </MediaCard>
        ))}
      </HorizontalScroll>
    </Section>
  );
}
