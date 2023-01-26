import { createSlice } from "@reduxjs/toolkit";
import { moviesInitialState } from "../constants";

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: moviesInitialState,
  reducers: {
    getAllMovies: (state, action) => {
      state.moviesData = action.payload;
    },
    changeOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    changeFilteredState: (state, action) => {
      state.filteredMovies = action.payload;
    },
    clearFilteredState: (state, action) => {
      state.filteredMovies = moviesInitialState.filteredMovies;
    },
    clearState: (state) => {
      state.moviesData = moviesInitialState.moviesData;
      state.filteredMovies = moviesInitialState.filteredMovies;
      state.orderBy = moviesInitialState.orderBy;
    },
  },
});

export const {
  getAllMovies,
  changeFilteredState,
  clearFilteredState,
  changeOrderBy,
  clearState,
} = MoviesSlice.actions;
export const moviesReducer = MoviesSlice.reducer;
