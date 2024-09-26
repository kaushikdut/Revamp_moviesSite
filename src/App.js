import "./App.css";
import Navbar from "./components/navbar/navbar";
import MovieBannerSlider from "./components/movie-banner-slider/movie-banner-slider";
import Homepage from "./components/homepage/homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-body">
        <MovieBannerSlider />
        <Homepage />
      </main>
    </div>
  );
}

export default App;
