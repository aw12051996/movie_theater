import { SHOW_CATEGORIES } from "./types";

import axios from "axios";

export const showCategories = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/api/v1/category");
  dispatch({
    type: SHOW_CATEGORIES,
    payload: res.data
  });
};
