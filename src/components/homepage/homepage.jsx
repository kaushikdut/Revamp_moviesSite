import "./homepage.css";
import Movieslist from "../moviesList/movieslist";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../api/tmdbApi";
import { useDispatch } from "react-redux";
import { setMovies } from "../../store/slice/movies/movies";
const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPopularMovies("popular", currentPage).then((data) => {
      setTotalPages(data.total_pages);
      const updatedMovies = data.results.map((movie) => ({
        ...movie,
        poster_path: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : null,
      }));

      dispatch(setMovies(updatedMovies));
    });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= Math.min(8, totalPages); i++) {
      pages.push(i);
    }

    if (totalPages > 8) {
      pages.push("...");

      if (currentPage < totalPages - 2) {
        pages.push(totalPages);
      }
    }

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() =>
          typeof page === "number" ? handlePageChange(page) : null
        }
        disabled={page === currentPage}
        style={{ margin: "0 0.5rem" }}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="homepage">
      <h2>Trending</h2>
      <Movieslist />

      <div className="pagination">{renderPagination()}</div>
    </div>
  );
};

export default Homepage;
