import { useState,  } from "react";
import { Routes, Route  } from "react-router-dom";
import PageLayout from "./Components/PageLayout/pagelayout";
import Movies from "./Pages/Movies/Movies";
import Login from "./Pages/Login/LogIn";
import Profile from "./Pages/Profile/Profile";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/home";
import Info from "./Pages/Info/Info";
import Tv from "./Pages/TVShows/tvshows";
import Watchlist from "./Pages/Watchlist/Watchlist"
import MediaDetails from "./Components/MediaDetail/MediaDetails";
import ProtectedRoute from "./Pages/protectedRoute";
import NotFound from "./Pages/notFound"
import RandomMovies from "./Pages/RandomMovie/RandomMovie";
const App = () => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  return (
    <>
<Routes>
<Route element={<PageLayout user={user} setUser={setUser} />}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="*" element={<NotFound />} />

  <Route element={<ProtectedRoute user={user} />}>
    <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
    <Route path="/watchlist" element={<Watchlist />} />
    <Route path="/media/:type/:id" element={<MediaDetails />} />
  </Route>

  <Route path="/random" element={<RandomMovies />} />
  <Route path="/movies" element={<Movies />} />
  <Route path="/tv" element={<Tv />} />
  <Route path="info" element={<Info />} />
  <Route path="/login" element={<Login setUser={setUser} />} />
</Route>
</Routes>
    </>
  );
};

export default App;
