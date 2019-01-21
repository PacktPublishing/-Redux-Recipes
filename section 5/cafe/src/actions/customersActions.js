import { SWITCH_CUSTOMER, FETCH_CUSTOMER_START } from './types';
import axios from 'axios';

export const markCustomerAsSelected = id => ({
  type: SWITCH_CUSTOMER,
  payload: id
});

export const fetchCustomers = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => console.log(res.data));
  return { type: FETCH_CUSTOMER_START };
};
