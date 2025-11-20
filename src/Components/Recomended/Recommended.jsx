import { useQuery } from "@tanstack/react-query";
import { useNavigate, NavLink } from "react-router-dom";
import { getTrending } from "../../Service/search";
import { getPosterUrl } from "../../Service/api";

import {
  RecSection,
  RecHeaderRow,
  RecTitle,
  RecSubtitle,
  RecGridWrapper,
  RecGridBlur,
  RecGrid,
  RecCard,
  RecPoster,
  RecName,
  LockedOverlay,
  LockedText,
  LockedButton,
} from "./Recommended.styled";

export default function Recommended() {
  const navigate = useNavigate();

  // user iz localStorage – dovoljno za ovu logiku
  const stored = localStorage.getItem("user");
  const isLoggedIn = !!stored;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recommended-trending"],
    queryFn: () => getTrending("day", 1),
  });

  const items = data?.results ?? [];

  const handleClick = (item) => {
    const isTv =
      item.media_type === "tv" ||
      (!!item.first_air_date && !item.release_date);

    const type = isTv ? "tv" : "movie";
    navigate(`/media/${type}/${item.id}`);
  };

  return (
    <RecSection>
      <RecHeaderRow>
        <RecTitle>Recommended for you</RecTitle>
        <RecSubtitle>
          Personalized picks based on what’s popular right now.
        </RecSubtitle>
      </RecHeaderRow>

      {isLoading && <p>Loading…</p>}
      {isError && <p>Failed to load recommendations.</p>}

      {!!items.length && (
        <RecGridWrapper>
          <RecGridBlur $locked={!isLoggedIn}>
            <RecGrid>
              {items.slice(0, 10).map((item) => (
                <RecCard key={item.id} onClick={() => isLoggedIn && handleClick(item)}>
                  <RecPoster
                    src={getPosterUrl(item.poster_path || item.backdrop_path)}
                    alt={item.title || item.name}
                  />
                  <RecName>{item.title || item.name}</RecName>
                </RecCard>
              ))}
            </RecGrid>
          </RecGridBlur>

          {!isLoggedIn && (
            <LockedOverlay>
              <LockedText>
                You have to log in to see your recommended list.
              </LockedText>
              <LockedButton as={NavLink} to="/login">
                Log in to BlueFlix
              </LockedButton>
            </LockedOverlay>
          )}
        </RecGridWrapper>
      )}
    </RecSection>
  );
}
