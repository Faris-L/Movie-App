import { useState } from "react";
import { useWatchlist } from "../../Context/watchlistContext";
import { useNavigate } from "react-router-dom";
import {
  WatchlistWrapper,
  SectionTitle,
  ItemsGrid,
  ItemCard,
  ItemPoster,
  ItemTitle,
  ItemType,
  RemoveButton,
  FiltersRow,
  FilterInput,
} from "./Watchlist.styled";
import { getPosterUrl } from "../../Service/api";

export default function Watchlist() {
  const { watchlist, removeItem } = useWatchlist();
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const navigate = useNavigate();

  const filtered = watchlist.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genreFilter
      ? item.genres?.some((g) => g.name.toLowerCase().includes(genreFilter.toLowerCase()))
      : true;
    return matchesSearch && matchesGenre;
  });

  const movies = filtered.filter((item) => item.type === "movie");
  const tvShows = filtered.filter((item) => item.type === "tv");

  const renderItem = (item) => (
    <ItemCard key={item.id}>
      <ItemPoster
        src={getPosterUrl(item.poster_path)}
        alt={item.title}
        onClick={() => navigate(`/media/${item.type}/${item.id}`)}
      />
      <ItemTitle>{item.title}</ItemTitle>
      <ItemType>{item.type.toUpperCase()}</ItemType>
      <RemoveButton onClick={() => removeItem(item.id)}>Remove from Watchlist</RemoveButton>
    </ItemCard>
  );

  return (
    <WatchlistWrapper>
      <FiltersRow>
        <FilterInput
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FiltersRow>

      <SectionTitle>MOVIES</SectionTitle>
      <ItemsGrid>
        {movies.length > 0 ? movies.map(renderItem) : <p>No movies in your watchlist.</p>}
      </ItemsGrid>
      <br />
      <hr />
      <br />
      <SectionTitle>TV SHOWS</SectionTitle>
      <ItemsGrid>
        {tvShows.length > 0 ? tvShows.map(renderItem) : <p>No TV shows in your watchlist.</p>}
      </ItemsGrid>
    </WatchlistWrapper>
  );
}
