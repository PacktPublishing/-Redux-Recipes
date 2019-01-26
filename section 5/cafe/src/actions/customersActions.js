import {
  SWITCH_CUSTOMER,
  FETCH_CUSTOMERS_START,
  FETCH_CUSTOMERS_FAILURE,
  FETCH_CUSTOMERS_SUCCESS
} from './types';
import axios from 'axios';

export const markCustomerAsSelected = id => ({
  type: SWITCH_CUSTOMER,
  payload: id
});

export const fetchCustomers = () => {
  return dispatch => {
    dispatch({ type: FETCH_CUSTOMERS_START });
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch({ type: FETCH_CUSTOMERS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_CUSTOMERS_FAILURE, payload: err });
      });
  };
};
