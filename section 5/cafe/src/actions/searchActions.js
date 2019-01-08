import { CHANGE_SEARCH_TERM } from './types'

export const changeSearchTerm = term => ({
  type: CHANGE_SEARCH_TERM,
  payload: term
});