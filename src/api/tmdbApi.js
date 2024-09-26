import axios from "axios";

const url = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_TMDB_KEY;

export const fetchPopularMovies = async (type, page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&page=${page}`
    );
    console.log("Api", response.data);
    return response.data;
  } catch (err) {
    console.log("Failed to fetch popular movies", err);
    return null;
  }
};
