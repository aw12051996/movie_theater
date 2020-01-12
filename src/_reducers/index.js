import { combineReducers } from "redux";
import categoryReducers from "./categoryReducers";
import movieReducers from "./movieReducers";
import cinemaReducers from "./cinemaReducers";

export default combineReducers({
  categories: categoryReducers,
  cinemas: cinemaReducers,
  movies: movieReducers
});
