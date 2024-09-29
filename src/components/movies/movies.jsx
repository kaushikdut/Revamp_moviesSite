import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../api/tmdbApi";
import "./movies.css";
import { IoHeart, IoPlayOutline } from "react-icons/io5";
import Video from "../video/video";

const Movies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const favoriteButtonRef = useRef(null);
  const videoRef = useRef(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    fetchMovie(id).then((res) => {
      setMovie(res);
    });

    window.scrollTo({ top: 0 });
  }, [id]);

  const handleButtonClick = () => {
    setTimeout(() => {
      favoriteButtonRef.current?.blur();
    }, 400);
  };

  const handleScroll = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="movie">
        <div className="movie-details">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt="backdrop"
            className="backdrop"
          />

          <div className="grid-left">
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt="poster"
              />
              <div>
                <div className="movie-rating">
                  <span>Popularity</span>
                  <h3>{Math.round(movie?.vote_average * 10)}% </h3>
                </div>
                <div className="imdb-rating">
                  <h2>IMDB Rating</h2>
                  <span>{movie?.vote_average}</span>
                </div>
              </div>
            </div>
            <h1>{movie?.title}</h1>
            <p>{movie?.genres?.map((genre) => genre.name).join(" | ")}</p>
          </div>

          <div className="button-container">
            <button className="button-1" onClick={handleScroll}>
              <IoPlayOutline size={25} style={{ fontWeight: "bolder" }} /> Watch
            </button>
            <button
              className="button-2"
              ref={favoriteButtonRef}
              id="favorite-button"
              onClick={handleButtonClick}
            >
              Add to favourite
            </button>
          </div>

          <div className="grid-right">
            <div className="movie-info-right">
              <h2>Overview</h2>
              <p>{movie?.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <Video id={id} ref={videoRef} movie={movie} />
    </>
  );
};

export default Movies;
