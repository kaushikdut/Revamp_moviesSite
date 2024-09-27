import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../api/tmdbApi";
import "./movies.css";

const Movies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovie(id).then((res) => {
      setMovie(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="movie">
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt="backdrop"
          className="backdrop"
        />

        <div className="movie-info-left">
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

        <div className="movie-info-right">
          <h2>Overview</h2>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
