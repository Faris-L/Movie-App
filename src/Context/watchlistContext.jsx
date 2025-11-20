import { createContext, useContext, useEffect, useState } from "react";
import { useNotifications } from "./notificationContext";

const WatchlistContext = createContext();
export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider = ({ children }) => {
  const { addNotification } = useNotifications();

  const [watchlist, setWatchlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("watchlist")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addItem = (item) => {
    if (!watchlist.some((x) => x.id === item.id)) {
      setWatchlist((prev) => [...prev, item]);
      addNotification({ message: `"${item.title}" added to Watchlist!`, type: "success" });
    }
  };

  const removeItem = (id) => {
    const item = watchlist.find((x) => x.id === id);
    setWatchlist((prev) => prev.filter((x) => x.id !== id));
    if (item) {
      addNotification({ message: `"${item.title}" removed from Watchlist!`, type: "error" });
    }
  };

  const isInWatchlist = (id) => watchlist.some((x) => x.id === id);

  return (
    <WatchlistContext.Provider value={{ watchlist, addItem, removeItem, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};
