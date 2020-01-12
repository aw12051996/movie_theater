import {
  SHOW_MOVIES,
  SHOW_MOVIES_BY_ID,
  SHOW_MOVIES_BY_CATEGORY
} from "../_actions/types";

const initialState = {
  movies: [],
  moviesById: [],
  moviesByCategory: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case SHOW_MOVIES_BY_ID:
      return {
        ...state,
        moviesById: action.payload
      };
    case SHOW_MOVIES_BY_CATEGORY:
      return {
        ...state,
        moviesByCategory: action.payload
      };
    default:
      return state;
  }
}
