import { useEffect, useState } from "react";
import HeroSlider from "../../Components/HeroSlider/heroslider";
import { getTrending } from "../../Service/search";
import { discoverMovies } from "../../Service/movie";
import { discoverTv } from "../../Service/tv";
import FaqSection from "../../Components/Faq/faq";
import { HomeDiv, Wrapper } from "./home.styled";
import MediaSection from "../../Components/categorylist/categorylist";
import Recommended from "../../Components/Recomended/Recommended";

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
       <Recommended /> 
      <Wrapper>
        <MediaSection
          title="Action Movies"
          mediaType="movie"
          queryKey={["movies-genre-28"]}
          queryFn={() => discoverMovies({ genreId: 28 })}
          getName={(item) => item.title}
        />

        <MediaSection
          title="Comedy Movies"
          mediaType="movie"
          queryKey={["movies-genre-35"]}
          queryFn={() => discoverMovies({ genreId: 35 })}
          getName={(item) => item.title}
        />

        <MediaSection
          title="Drama TV Shows"
          mediaType="tv"
          queryKey={["tv-genre-18"]}
          queryFn={() => discoverTv({ genreId: 18 })}
          getName={(item) => item.name || item.original_name}
        />
      </Wrapper>

      <div id="faq">
        <FaqSection />
      </div>
    </HomeDiv>
  );
};

export default Home;
