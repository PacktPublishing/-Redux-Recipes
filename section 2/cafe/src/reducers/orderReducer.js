const initialState = [
  { id: 1, order: 'Tea', amount: 3 },
  { id: 5, order: 'Pizza', amount: 5 }
];

const orderReducer = (state=initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default orderReducer;
