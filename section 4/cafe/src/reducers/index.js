import { combineReducers } from "redux";
import orderReducer from './orderReducer'
import customersReducer from './customersReducer'
import backlogReducer from './backlogReducer'
import searchReducer from './searchReducer'

export default combineReducers({
  orders: orderReducer,
  customers: customersReducer,
  backlog: backlogReducer,
  searchTerm: searchReducer
});