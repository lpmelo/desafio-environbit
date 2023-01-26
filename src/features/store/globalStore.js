import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../../components/pages/Movies/features/MoviesSlice";

export const store = configureStore({
  reducer: { movies: moviesReducer },
});
