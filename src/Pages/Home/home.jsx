// src/Pages/Home/Home.jsx
import { useEffect, useState } from "react";
import HeroSlider from "../../Components/HeroSlider/heroslider";
import { getTrending } from "../../Service/search";
import { HomeDiv } from "./home.styled";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        const res = await getTrending("day", 1);
        if (!cancelled) {
          setTrending(res.results ?? []);
        }
      } catch (err) {
        console.error("Trending error:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading && !trending.length) {
    return <div style={{ padding: 40 }}>Loading...</div>;
  }

  return (
    <HomeDiv>
      <HeroSlider items={trending} />
    </HomeDiv>
  );
};

export default Home;
