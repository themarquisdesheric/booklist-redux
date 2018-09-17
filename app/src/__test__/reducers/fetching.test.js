import c from '../../constants';
import fetching from '../../reducers/fetching';

describe('fetching', () => {
  it('sets the fetching to true when fetching books', () => {
    const state = false;

    const action = {
      type: c.FETCH_BOOKS,
      payload: true
    };

    const expectedState = true;

    const newState = fetching(state, action);

    expect(newState).toEqual(expectedState);
  });

  it('sets the fetching to false when cancelling fetching', () => {
    const state = true;

    const action = {
      type: c.CANCEL_FETCHING,
      payload: false
    };

    const expectedState = false;

    const newState = fetching(state, action);

    expect(newState).toEqual(expectedState);
  });
});
