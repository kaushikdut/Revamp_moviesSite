import { useDispatch } from "react-redux";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import MovieBannerSlider from "./components/movie-banner-slider/movie-banner-slider";

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Navbar />
      <main className="App-body">
        <MovieBannerSlider />
      </main>
    </div>
  );
}

export default App;
