import React from "react";
import Card from "../card/card";
import "./moviesList.css";
import { useSelector } from "react-redux";

function Movieslist({ loading }) {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <div className="movies-list">
      {movies?.map((movie) => {
        return (
          <Card
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            loading={loading}
            id={movie.id}
          />
        );
      })}
    </div>
  );
}

export default Movieslist;
