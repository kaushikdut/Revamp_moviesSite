import React from "react";
import "./card.css";
import Loading from "../../hooks/loading";

function Card({ image, title, loading }) {
  return (
    <div className="card-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <img
            src={image}
            alt="img"
            className="image"
            onLoad={(e) => console.log(e)}
          />
          <div className="card-info">
            <h3>{title}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
