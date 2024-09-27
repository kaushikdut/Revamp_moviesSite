import React from "react";
import "./card.css";
import SkeletonLoading from "../../hooks/loading/skeleton-loading";

function Card({ image, title, loading }) {
  return (
    <div className="card-container">
      {loading ? (
        <SkeletonLoading />
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
