import reducer from './customersReducer';
import * as types from '../actions/types';

const initialState = {
  isFetching: false,
  errors: null,
  list: []
};

describe('customers reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })


  it('should handle the fetch customer fulfilled', () => {
    expect(reducer(initialState, {
      type: types.FETCH_CUSTOMERS_FULFILLED,
      payload: {
        data: [{
            name: 'Medhat Dawoud',
            id: 123,
            Job: 'JavaScript Engineer'
          },
          {
            name: 'Karma Dawoud',
            id: 456,
            Job: 'Eating and Sleeping'
          }
        ]
      }
    })).toEqual({
      isFetching: false,
      list: [{
          id: 123,
          name: 'Medhat',
          selected: false
        },
        {
          id: 456,
          name: 'Karma',
          selected: false
        }
      ]
    })
  })

  it('should handle the error message in case of reject', () => {
    const errorMessage = 'something went wrong';

    expect(reducer(initialState, {
      type: types.FETCH_CUSTOMERS_REJECTED,
      payload: errorMessage
    })).toEqual({
      isFetching: false,
      list: [],
      errors: errorMessage
    })
  })

})