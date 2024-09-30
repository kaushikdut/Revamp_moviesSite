import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      if (action.payload) {
        state.movies = action.payload.map((movie) => ({
          ...movie,
        }));
      }
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
