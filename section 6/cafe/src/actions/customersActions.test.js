import * as actions from './customersActions';
import configureMockStore from 'redux-mock-store'
import promiseMiddleware from 'redux-promise-middleware'
import moxios from 'moxios';

let middlewares = [promiseMiddleware()];
let mockStore = configureMockStore(middlewares);

describe('customers actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  })

  it('should dispatch FETECH_CUSTOMERS_PENDING and FETCH_CUSTOMERS_FULFILLED in case of success', () => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        code: 200,
        payload: []
      })
    })

    let expectedActionTypes = [
      'FETCH_CUSTOMERS_PENDING',
      'FETCH_CUSTOMERS_FULFILLED' 
    ];

    let store = mockStore();
    return store.dispatch(actions.fetchCustomers()).then(() => {
      let dispatchedActions = store.getActions();
      let disptachedTypes = dispatchedActions.map(action => action.type);

      expect(disptachedTypes).toEqual(expectedActionTypes);
    })

  })
})