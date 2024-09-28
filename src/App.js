import "./App.css";
import Navbar from "./components/navbar/navbar";
import MovieBannerSlider from "./components/movie-banner-slider/movie-banner-slider";
import Homepage from "./components/homepage/homepage";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/movies/movies";
import { useSelector } from "react-redux";
import SearchBar from "./components/search/searchBar";

function App() {
  const isSidebarOpen = useSelector((state) => state.movies.isSidebarOpen);
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
