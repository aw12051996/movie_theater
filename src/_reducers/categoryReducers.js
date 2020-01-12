import { SHOW_CATEGORIES } from "../_actions/types";

const initialState = {
  categories: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
}
