import {
  SWITCH_CUSTOMER,
  RESET_AFTER_SUBMIT,
  FETCH_CUSTOMERS_START,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE
} from '../actions/types';

let initState = {
  isFetching: false,
  errors: null,
  list: []
};

const customerReducer = (state = initState, action) => {
  switch (action.type) {
    case SWITCH_CUSTOMER:
      let newState = [...state.list];
      newState.forEach(c => {
        if (c.id === action.payload) c.selected = true;
        else c.selected = false;
      });
      return { ...state, list: newState };
    case RESET_AFTER_SUBMIT:
      let nextState = [...state.list];
      nextState.forEach(c => (c.selected = false));
      return { ...state, list: nextState };
    case FETCH_CUSTOMERS_START:
      return { ...state, isFetching: true };
    case FETCH_CUSTOMERS_SUCCESS:
      const customerList = action.payload
        .map(user => ({
          id: user.id,
          name: user.name.split(' ')[0],
          selected: false
        }))
        .splice(0, 2);
      return { isFetching: false, list: customerList };
    case FETCH_CUSTOMERS_FAILURE:
      return { ...state, isFetching: false, errors: action.payload };
    default:
      return state;
  }
};

export default customerReducer;
