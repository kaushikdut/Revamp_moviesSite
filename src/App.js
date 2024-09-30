import "./App.css";
import Navbar from "./components/navbar/navbar";
import MovieBannerSlider from "./components/movie-banner-slider/movie-banner-slider";
import Homepage from "./components/homepage/homepage";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/movies/movies";
import SearchBar from "./components/search/searchBar";
import Favourite from "./components/favourite/favourite";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="searchbar-app">
        <SearchBar />
      </div>

      <main className="App-body">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MovieBannerSlider />
                <Homepage />
              </>
            }
          />
          <Route path="/movies/:id" element={<Movies />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
