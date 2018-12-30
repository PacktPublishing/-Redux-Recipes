import { ADD_ORDER, DELETE_ORDER } from '../actions/types';

const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, {...action.payload, id: generateID(state)}];
    case DELETE_ORDER:
      return state.filter(order => order.id !== action.payload);
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
