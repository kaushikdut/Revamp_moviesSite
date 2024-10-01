import { useEffect, useState } from "react";
import Card from "../card/card";
import "./favourite.css";
import { getFavouriteMovies } from "../../api/tmdbApi";

function Favourite() {
  const getFav = JSON.parse(localStorage.getItem("favourite")) || [];
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    getFav.forEach((id) => {
      getFavouriteMovies(id).then((res) => {
        const updatedFav = {
          ...res,
          poster_path: `https://image.tmdb.org/t/p/w500${res.poster_path}`,
        };

        setFavMovies((prev) => {
          const alreadyExists = prev.some(
            (movie) => movie.id === updatedFav.id
          );
          return alreadyExists ? prev : [...prev, updatedFav];
        });
      });
    });
  }, [getFav]);

  return (
    <div className="favourite">
      <h1>Favourite</h1>
      <div className="favourite-container">
        {favMovies.length > 0 ? (
          favMovies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              title={movie.title}
            />
          ))
        ) : (
          <p>No Favourite Movies selected</p>
        )}
      </div>
    </div>
  );
}

export default Favourite;
