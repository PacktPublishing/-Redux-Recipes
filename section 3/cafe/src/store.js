import { createStore } from 'redux';
import rootReducer from './reducers'
import { addOrder } from './actions/orderActions';

const store = createStore(rootReducer);

function interruptDispatch(action) {
  console.log('before dispatching');
  action.payload = {...action.payload, amount: 1};
  store.dispatch(action);
  console.log('after dispatching');
}

interruptDispatch(addOrder({order:'Tea'}));

export default store; 