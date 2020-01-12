import { SHOW_CITY, SHOW_CINEMA } from "../_actions/types";

const initialState = {
  cities: [],
  cinemas: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_CITY:
      return {
        ...state,
        cities: action.payload
      };
    case SHOW_CINEMA:
      return {
        ...state,
        cities: action.payload
      };
    default:
      return state;
  }
}
