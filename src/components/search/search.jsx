import { useParams } from "react-router-dom";
import "./search.css";
import { useEffect, useState } from "react";
import { searchMovies } from "../../api/tmdbApi";
import Card from "../card/card";

const Search = () => {
  const { query } = useParams();
  const [fetchedMovies, setFetchedMovies] = useState([]);
  useEffect(() => {
    searchMovies(query).then((res) => {
      console.log(res);
      setFetchedMovies(res);
    });
  }, [query]);
  return (
    <div className="search-container">
      <h3>
        Searched result with "<span style={{ color: "#D10000" }}>{query}</span>"
      </h3>

      <div className="search-result">
        {fetchedMovies?.map((movie) => (
          <Card
            key={movie.id}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
