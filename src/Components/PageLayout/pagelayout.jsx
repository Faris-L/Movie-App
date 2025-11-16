import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Outlet } from "react-router-dom";
import { AppWrapper, Main } from "./pagelayout.styled";

const PageLayout = () => {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </AppWrapper>
  );
};

export default PageLayout;
