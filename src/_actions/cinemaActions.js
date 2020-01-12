import { SHOW_CITY } from "./types";

import axios from "axios";

export const showCities = () => async dispatch => {
  const res = await axios.get(`http://localhost:5000/api/v1/cinema/city`);
  dispatch({
    type: SHOW_CITY,
    payload: res.data
  });
};

// export const showCinema = city => async dispatch => {
//   const res = await axios.get(
//     `http://localhost:5000/api/v1/cinema?data=${city}`
//   );
//   dispatch({
//     type: SHOW_CINEMA,
//     payload: res.data
//   });
// };
