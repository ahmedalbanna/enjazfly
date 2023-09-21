import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ResultsPage from "./pages/ResultsPage";
import Instructions from "./pages/Instructions";
import Homepage from "./pages/Homepage";
import HotelsPage from "./pages/HotelsPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "AnjazFly";
        metaDescription = "AnjazFly";
        break;
      case "/instructions":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/hotels-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ResultsPage />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/hotels-page" element={<HotelsPage />} />
    </Routes>
  );
}
export default App;
