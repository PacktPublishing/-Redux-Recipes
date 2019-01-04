import {
  ADD_ORDER,
  DELETE_ORDER,
  SUBMIT_ORDER,
  RESET_AFTER_SUBMIT,
  MARK_ORDER_AS_DONE
} from './types';

export const addOrder = order => ({
  type: ADD_ORDER,
  payload: order
});

export const deleteOrder = id => ({
  type: DELETE_ORDER,
  payload: id
});

export const submitOrder = data => ({
  type: SUBMIT_ORDER,
  payload: data
});

export const resetAfterSubmit = () => ({
  type: RESET_AFTER_SUBMIT
});

export const markOrderAsDone = id => ({
  type: MARK_ORDER_AS_DONE,
  payload: id
});
