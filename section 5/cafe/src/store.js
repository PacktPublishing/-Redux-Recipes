import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';

let logger = store => next => action => {
  console.group('dispatching:', action.type);
  let result = next(action);
  console.log('next state:', store.getState());
  console.groupEnd();
  return result;
};
let composeDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeDevTools(applyMiddleware(logger, thunk))
);

export default store;
