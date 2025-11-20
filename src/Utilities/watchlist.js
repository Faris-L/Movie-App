export const getWatchlist = () => {
  return JSON.parse(localStorage.getItem("watchlist")) || [];
};

export const addToWatchlist = (item) => {
  const current = getWatchlist();
  const exists = current.some((x) => x.id === item.id);

  if (!exists) {
    const updated = [...current, item];
    localStorage.setItem("watchlist", JSON.stringify(updated));
  }
};

export const removeFromWatchlist = (id) => {
  const updated = getWatchlist().filter((x) => x.id !== id);
  localStorage.setItem("watchlist", JSON.stringify(updated));
};

export const isInWatchlist = (id) => {
  return getWatchlist().some((x) => x.id === id);
};
