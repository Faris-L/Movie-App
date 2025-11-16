import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/PageLayout/pagelayout";

// ... ostale stranice
function App() {
  return (
    <div>
      <PageLayout/>
    </div>
    // <Routes>
    //   <Route element={<PageLayout />}>
    //     <Route path="/" element={<Home />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
