import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

let logger = store => next => action => {
  console.group('dispatching:', action.type);
  let result = next(action);
  console.log('next state:', store.getState());
  console.groupEnd();
  return result;
};

let FooLogger = store => next => action => {
  console.log('In Foo');
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger,FooLogger));

export default store;
