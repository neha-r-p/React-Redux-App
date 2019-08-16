import {
  FETCH_COCKTAIL_DATA_START,
  FETCH_COCKTAIL_DATA_SUCCESS,
  FETCH_COCKTAIL_DATA_FAILURE
} from "../actions";

const initialState = {
  cocktails: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAIL_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_COCKTAIL_DATA_SUCCESS:
      return {
        ...state,
        cocktails: action.payload,
        isLoading: false,
        error: ""
      };
    default:
      return state;
  }
};
