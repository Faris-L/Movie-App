import Header from "../Header/Header";
import Footer from "../Footer/footer";
import CookieBanner from "../Cookies/cookies";
import { Outlet } from "react-router-dom";
import { AppWrapper, Main } from "./pagelayout.styled";

const PageLayout = ({ user, setUser }) => {
  return (
    <AppWrapper>
      <Header user={user} setUser={setUser} />
      <Main>
        <Outlet context={{ user, setUser }} />
      </Main>
      <Footer />
      <CookieBanner />
    </AppWrapper>
  );
};

export default PageLayout;
