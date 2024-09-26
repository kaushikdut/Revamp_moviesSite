import "./homepage.css";
import Movieslist from "../moviesList/movieslist";
import { useEffect } from "react";
import { fetchPopularMovies } from "../../api/tmdbApi";
import { useDispatch } from "react-redux";
import { setMovies } from "../../store/slice/movies/movies";
const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPopularMovies("popular").then((data) => {
      const updatedMovies = data.results.map((movie) => ({
        ...movie,
        poster_path: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : null,
      }));

      dispatch(setMovies(updatedMovies));
    });
  }, []);
  return (
    <div className="homepage">
      <h2>Trending🔥</h2>
      <Movieslist />
    </div>
  );
};

export default Homepage;
