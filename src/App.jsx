import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Movies from "./Pages/Movies/Movies";
import Login from "./Pages/Login/LogIn";
import Profile from "./Pages/Profile/Profile";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Info from "./Pages/Info/Info";
import { showNotification } from "./Components/Notifications/Notifications";

const App = () => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
};

export default App;
