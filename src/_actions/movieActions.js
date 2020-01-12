import {
  SHOW_MOVIES,
  SHOW_MOVIES_BY_ID,
  SHOW_MOVIES_BY_CATEGORY
} from "./types";

import axios from "axios";

export const showMovies = () => async dispatch => {
  const res = await axios.get(`http://localhost:5000/api/v1/movie`);
  dispatch({
    type: SHOW_MOVIES,
    payload: res.data
  });
};

export const showMoviesById = id => async dispatch => {
  const res = await axios.get(`http://localhost:5000/api/v1/movie/${id}`);
  dispatch({
    type: SHOW_MOVIES_BY_ID,
    payload: res.data
  });
};

export const showMoviesByCategory = id => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/api/v1/category/${id}/movies`
  );
  dispatch({
    type: SHOW_MOVIES_BY_CATEGORY,
    payload: res.data
  });
};
