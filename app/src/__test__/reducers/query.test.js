import c from '../../constants';
import query from '../../reducers/query';

describe('query', () => {
  it('sets the search query upon fetching books', () => {
    const state = '';

    const action = {
      type: c.FETCH_BOOKS,
      payload: 'borges'
    };

    const newState = query(state, action);

    expect(newState).toEqual('borges');
  });
});
