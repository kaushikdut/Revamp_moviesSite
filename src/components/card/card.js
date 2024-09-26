import React from "react";
import "./card.css";

function Card({ image, title }) {
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
