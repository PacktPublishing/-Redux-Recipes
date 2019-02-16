import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './reducers';
import { loadState, saveState } from './localstorage'

let logger = store => next => action => {
  console.group('dispatching:', action.type);
  let result = next(action);
  console.log('next state:', store.getState());
  console.groupEnd();
  return result;
};
let composeDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = loadState();

const store = createStore(
  rootReducer,
  initialState,
  composeDevTools(applyMiddleware(promiseMiddleware()))
);

store.subscribe(() => {
  saveState(store.getState());
})

export default store;
