import c from '../../constants';
import { fetchBooks, cancelFetching } from '../../actions';

describe('actions: fetching', () => {
  it('should create an action to set fetching to the search query when fetching books', () => {
    const action = fetchBooks('borges');

    const expectedAction = {
      type: c.FETCH_BOOKS,
      payload: 'borges'
    };

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set fetching to false when cancelling fetching', () => {
    const action = cancelFetching();

    const expectedAction = {
      type: c.CANCEL_FETCHING,
      payload: false
    };

    expect(action).toEqual(expectedAction);
  });
});
