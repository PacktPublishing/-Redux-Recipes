let initialState = {
  orders: [
    { id: 1, order: 'Coffee', amount: 1 },
    { id: 2, order: 'Cake', amount: 1 },
    { id: 3, order: 'Sandwish', amount: 1 }
  ]
};

const NEW_ORDER = 'NEW_ORDER';
const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
const DELETE_ORDER = 'DELETE_ORDER';

// reducer
let reducer = (state, action) => {
  switch (action.type) {
    case NEW_ORDER: {
      let newState = { ...state, orders: [...state.orders, action.payload] };
      return newState;
    }
    case CHANGE_AMOUNT: {
      let { id, amount } = action.payload;
      let newState = { ...state };
      newState.orders.map(item => {
        if (item.id === id) {
          item.amount = amount;
        }
      });
      return newState;
    }
    case DELETE_ORDER: {
      let { id } = action.payload;
      let newState = { ...state };
      newState.orders = newState.orders.filter(item => item.id !== id);
      return newState;
    }
    default:
      return state;
  }
};

let store = Redux.createStore(reducer, initialState);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: CHANGE_AMOUNT, payload: { id: 2, amount: 2 } });
store.dispatch({ type: DELETE_ORDER, payload: { id: 3 } });
