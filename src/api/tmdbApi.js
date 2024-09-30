import axios from "axios";

const url = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_TMDB_KEY;

export const fetchPopularMovies = async (type, page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&page=${page}`
    );
    return response.data;
  } catch (err) {
    console.log("Failed to fetch popular movies", err);
    return null;
  }
};

export const fetchMovie = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    return response.data;
  } catch (err) {
    console.log("Failed to fetch movie", err);
  }
};

export const fetchMovieVideos = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );

    return response.data;
  } catch (err) {
    console.log("Failed to fetch movie videos", err);
  }
};

export const getFavouriteMovies = async (movieId) => {
  if (movieId) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );

    const { id, title, poster_path } = await response.data;
    return { id, title, poster_path };
  }
};
