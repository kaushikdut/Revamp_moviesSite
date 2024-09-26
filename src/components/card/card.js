import React from "react";
import "./card.css";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeFavMovies, setFavMovies } from "../../store/slice/movies/movies";

function Card({ image, title }) {
  const dispatch = useDispatch();

  return (
    <div className="card-container">
      <img src={image} alt="img" className="image" />
      <div className="card-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Card;
