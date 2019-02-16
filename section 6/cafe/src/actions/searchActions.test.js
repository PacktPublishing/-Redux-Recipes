import * as actions from './searchActions';
import {
  CHANGE_SEARCH_TERM
} from './types'

describe('Search Actions', () => {
  it('should return change search term action', () => {
    const term = 'Tea';
    const expectedAction = {
      type: CHANGE_SEARCH_TERM,
      payload: term
    };

    expect(actions.changeSearchTerm(term)).toEqual(expectedAction);
  })
})