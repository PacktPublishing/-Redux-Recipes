import { SUBMIT_ORDER, MARK_ORDER_AS_DONE } from '../actions/types';

const initialState = [];

const backlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ORDER:
      return [...state, { ...action.payload, id: generateID(state) }];
    case MARK_ORDER_AS_DONE:
      return [...state].filter(o => o.id !== action.payload);
    default:
      return state;
  }
};

let generateID = orders => {
  let lastId = 0;
  if (orders.length > 0) {
    lastId = orders[orders.length - 1].id;
  }
  return ++lastId;
};

export default backlogReducer;
