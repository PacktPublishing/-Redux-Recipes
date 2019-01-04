import { combineReducers } from "redux";
import orderReducer from './orderReducer'
import customersReducer from './customersReducer'
import backlogReducer from './backlogReducer'

export default combineReducers({
  orders: orderReducer,
  customers: customersReducer,
  backlog: backlogReducer
});