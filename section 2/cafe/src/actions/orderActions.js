import { ADD_ORDER } from './types';

export const addOrder = order => ({
  type: ADD_ORDER,
  payload: order
});
