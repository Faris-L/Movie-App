import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/PageLayout/pagelayout";
import AboutUs from "./Pages/AboutUs/aboutus";

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
