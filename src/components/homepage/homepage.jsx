import "./homepage.css";
import Movieslist from "../moviesList/movieslist";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../api/tmdbApi";
import { useDispatch } from "react-redux";
import { setMovies } from "../../store/slice/movies/movies";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const pathname = window.location.search;
  const page = pathname.replace("?page=", "");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newParams = new URLSearchParams();
  newParams.set("page", currentPage);
  const newParamsString = newParams.toString();

  useEffect(() => {
    navigate(`?${newParamsString}`);

    try {
      setLoading(true);
      fetchPopularMovies("popular", currentPage).then((data) => {
        setTotalPages(data.total_pages);
        const updatedMovies = data.results.map((movie) => ({
          ...movie,
          poster_path: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : null,
        }));

        dispatch(setMovies(updatedMovies));
        setLoading(false);
      });
    } catch (error) {
      console.error("Failed to fetch popular movies", error);
    }
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= Math.min(8, totalPages); i++) {
      pages.push(i);
    }

    if (currentPage > 8) {
      pages.splice(1, 0, "...");
      pages.splice(2, 7);

      for (
        let j = currentPage - 3;
        j < Math.min(currentPage, totalPages);
        j++
      ) {
        pages.push(j);
      }

      for (
        let k = currentPage;
        k <= Math.min(currentPage + 4, totalPages);
        k++
      ) {
        pages.push(k);
      }
    }

    if (totalPages > 8) {
      pages.splice(pages.length, 0, "...");
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

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="homepage">
      <h2>Trending</h2>
      <Movieslist loading={loading} />

      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          className="navigation-btn"
          disabled={currentPage === 1}
        >
          <MdNavigateBefore />
        </button>
        {renderPagination()}
        <button
          onClick={handleNextPage}
          className="navigation-btn"
          disabled={currentPage === totalPages}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Homepage;
