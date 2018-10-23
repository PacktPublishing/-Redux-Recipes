let initialState = {
  orders: [
    { id: 1, order: 'Coffee', amount: 1 },
    { id: 2, order: 'Cake', amount: 1 },
    { id: 3, order: 'Sandwish', amount: 1 }
  ],
  users: [
    { id: 1, name: 'John', age: 34 },
    { id: 2, name: 'Mark', age: 28 },
    { id: 3, name: 'Nick', age: 45 }
  ]
};

const NEW_ORDER = 'NEW_ORDER';
const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
const DELETE_ORDER = 'DELETE_ORDER';

const CHANGE_AGE = 'CHANGE_AGE';


let orderReducer = (state=initialState.orders, action) => {
  switch (action.type) {
    case NEW_ORDER: {
      let newState = [ ...state, action.payload];
      return newState;
    }
    case CHANGE_AMOUNT: {
      let { id, amount } = action.payload;
      let newState = [ ...state ];
      newState.map(item => {
        if (item.id === id) {
          item.amount = amount;
        }
      });
      return newState;
    }
    case DELETE_ORDER: {
      let { id } = action.payload;
      let newState = [ ...state ];
      return newState.filter(item => item.id !== id);
    }
    default:
      return state;
  }
};

let userReducer = (state=initialState.users, action) => {
  switch (action.type) {
    case CHANGE_AGE: {
      let { id, age } = action.payload;
      let newState = [ ...state ];
      newState.map(item => {
        if (item.id === id) {
          item.age = age;
        }
      });
      return newState;
    }
    default:
      return state;
  }

}

let rootReducer = Redux.combineReducers({
  orders: orderReducer,
  users: userReducer
});

let store = Redux.createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: CHANGE_AMOUNT, payload: { id: 2, amount: 2 } });
store.dispatch({ type: DELETE_ORDER, payload: { id: 3 } });

store.dispatch({ type: CHANGE_AGE, payload: { id: 3, age: 25 } });