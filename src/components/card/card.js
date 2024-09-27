import React from "react";
import "./card.css";
import SkeletonLoading from "../../hooks/loading/skeleton-loading";
import { useNavigate } from "react-router-dom";

function Card({ image, title, loading, id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movies/${id}`);
  };
  return (
    <div className="card-container" onClick={handleClick}>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <>
          <img src={image} alt="img" className="image" />
          <div className="card-info">
            <h3>{title}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
