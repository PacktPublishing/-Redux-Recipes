import { ADD_ORDER, DELETE_ORDER } from './types';

export const addOrder = order => ({
  type: ADD_ORDER,
  payload: order
});

export const deleteOrder = id => ({
  type: DELETE_ORDER,
  payload: id
});