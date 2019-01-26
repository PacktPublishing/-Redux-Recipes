import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
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
  composeDevTools(applyMiddleware(promiseMiddleware(), logger))
);

export default store;
