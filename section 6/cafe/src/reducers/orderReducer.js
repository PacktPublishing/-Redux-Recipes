import { ADD_ORDER, DELETE_ORDER, RESET_AFTER_SUBMIT } from '../actions/types';

const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, {...action.payload, id: generateID(state)}];
    case DELETE_ORDER:
      return state.filter(order => order.id !== action.payload);
    case RESET_AFTER_SUBMIT:
      return [];
    default:
      return state;
  }
};

let generateID = (orders) => {
  let lastId = 0;
  if (orders.length > 0) {
    lastId = orders[orders.length - 1].id;
  }
  return ++lastId;
}

export default orderReducer;
