import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import PageNotFound from "./Pages/PageNotFound";
import Search from "./Pages/Search";
import Favorites from "./Pages/Favorites";
import VideoCadraste from "./Pages/VideoCadraste";
import FavoritesProvider from "./contexts/Favorites";

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Watch/:id" element={<Watch />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/cadraste" element={<VideoCadraste />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
export default AppRoutes;
