import { SWITCH_CUSTOMER, FETCH_CUSTOMERS } from './types';
import axios from 'axios';

export const markCustomerAsSelected = id => ({
  type: SWITCH_CUSTOMER,
  payload: id
});

export const fetchCustomers = () => ({
  type: FETCH_CUSTOMERS,
  payload: axios.get('https://jsonplaceholder.typicode.com/users')
});
