import { useWatchlist } from "../../Context/watchlistContext";

export default function WatchlistButton({ item }) {
  const { addItem, removeItem, isInWatchlist } = useWatchlist();
  const inList = isInWatchlist(item.id);

  const handleClick = () => {
    if (inList) {
      removeItem(item.id);
    } else {
      addItem(item);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        marginTop: "15px",
        padding: "10px 16px",
        background: inList ? "#b30000" : "#1f6bff",
        border: "none",
        borderRadius: "8px",
        color: "white",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      {inList ? "Remove from Watchlist" : "Add to Watchlist"}
    </button>
  );
}
