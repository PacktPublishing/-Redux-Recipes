import { combineReducers } from "redux";
import orderReducer from './orderReducer'
import customersReducer from './customersReducer'

export default combineReducers({
  orders: orderReducer,
  customers: customersReducer
});