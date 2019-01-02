import { SWITCH_CUSTOMER } from '../actions/types';

let initState = [
  {
    id: 1,
    name: 'John',
    selected: true
  },
  {
    id: 2,
    name: 'Mark',
    selected: false
  }
];

const customerReducer = (state = initState, action) => {
  switch (action.type) {
    case SWITCH_CUSTOMER:
      let newState = [...state];
      newState.forEach(c => {
        if (c.id === action.payload) c.selected = true;
        else c.selected = false;
      });
      return newState;
    default:
      return state;
  }
};

export default customerReducer;
