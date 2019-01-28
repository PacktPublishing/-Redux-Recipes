import { CHANGE_SEARCH_TERM } from '../actions/types';

const initialState = '';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
