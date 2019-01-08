import { SWITCH_CUSTOMER } from './types'

export const markCustomerAsSelected = id => ({
  type: SWITCH_CUSTOMER,
  payload: id
})