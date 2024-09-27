import { useEffect, useRef, useState } from "react";
import "./movie-banner-slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdStar,
  MdStarHalf,
  MdStarOutline,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MovieBannerSlider = () => {
  const [movies, setMovies] = useState([]);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
        );
        const data = await response.json();
        if (data.results) {
          const updatedMovies = data.results.map((movie) => ({
            ...movie,
            poster_path: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : null,
            backdrop_path: movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : null,
          }));
          setMovies(updatedMovies);
          console.log(updatedMovies);
        }
      } catch (err) {
        console.log("Failed to fetch trending movies", err);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

  const renderRating = (ratingValue) => {
    const totalStars = 5;
    const filledStars = Math.floor(ratingValue / 2);
    const hasHalfStar = ratingValue % 2 >= 1;

    return (
      <div className="star-rating">
        {Array.from({ length: totalStars }).map((_, index) => {
          if (index < filledStars) {
            return <MdStar key={index} />;
          }

          if (index === filledStars && hasHalfStar) {
            return <MdStarHalf key={index} />;
          }

          return <MdStarOutline key={index} style={{ color: "white" }} />;
        })}
      </div>
    );
  };

  return (
    <div className="MovieBannerSlider">
      {/* Custom next/prev buttons */}
      <button ref={prevButtonRef} className="custom-prev">
        <MdNavigateBefore style={{ width: "30px", height: "30px" }} />
      </button>
      <button ref={nextButtonRef} className="custom-next">
        <MdNavigateNext style={{ width: "30px", height: "30px" }} />
      </button>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper-container"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              style={{ opacity: 0.7 }}
              src={movie.backdrop_path}
              alt={movie.title}
            />
            <div className="banner-info">
              <h1 style={{ textTransform: "uppercase" }}>{movie.title}</h1>
              {renderRating(movie.vote_average)}
              <p>{movie.overview}</p>
              <button onClick={() => handleClick(movie.id)}>Watch Now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieBannerSlider;
