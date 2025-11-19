// src/Components/HeroSlider/HeroSlider.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  SliderWrapper,
  Slide,
  Background,
  Overlay,
  Content,
  Title,
  Meta,
  Overview,
  ButtonsRow,
  PrimaryBtn,
  SecondaryBtn,
  Dots,
  Dot,
  Arrows,
  ArrowBtn,
} from "./heroslider.styled";
import { getBackdropUrl } from "../../Service/api";

const AUTO_DELAY = 3000; 

const HeroSlider = ({ items = [] }) => {
  const [index, setIndex] = useState(0);


  if (!items.length) return null;

  const safeIndex = ((index % items.length) + items.length) % items.length;
  const current = items[safeIndex];

  const isTv =
    current.media_type === "tv" ||
    (!!current.first_air_date && !current.release_date);

  const bgImage = getBackdropUrl(
    current.backdrop_path || current.poster_path
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_DELAY);

    return () => clearTimeout(id);
  }, [safeIndex, items.length]);

  const goTo = (i) => setIndex(i);
  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  const detailsLink = isTv ? `/tv/${current.id}` : `/movie/${current.id}`;

  return (
    <SliderWrapper>
      <Slide>
        <Background style={{ backgroundImage: `url(${bgImage})` }} />
        <Overlay />

        <Content>
          <Title>{current.title || current.name}</Title>

          <Meta>
            ⭐ {(current.vote_average || 0).toFixed(1)} •{" "}
            {isTv ? "TV Show" : "Movie"}{" "}
            {current.release_date?.slice(0, 4) ||
              current.first_air_date?.slice(0, 4) ||
              ""}
          </Meta>

          {current.overview && (
            <Overview>
              {current.overview.length > 200
                ? current.overview.slice(0, 200) + "..."
                : current.overview}
            </Overview>
          )}

          <ButtonsRow>
            <Link to={detailsLink}>
              <PrimaryBtn>Details</PrimaryBtn>
            </Link>
            <SecondaryBtn>+ Watchlist</SecondaryBtn>
          </ButtonsRow>
        </Content>

        <Arrows>
          <ArrowBtn onClick={prev}>
            <i className="bx bx-chevron-left" />
          </ArrowBtn>
          <ArrowBtn onClick={next}>
            <i className="bx bx-chevron-right" />
          </ArrowBtn>
        </Arrows>

        <Dots>
          {items.map((_, i) => (
            <Dot
              key={i}
              $active={i === safeIndex}
              onClick={() => goTo(i)}
            />
          ))}
        </Dots>
      </Slide>
    </SliderWrapper>
  );
};

export default HeroSlider;
