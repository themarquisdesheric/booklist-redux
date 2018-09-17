import c from '../../constants';
import paginationPages from '../../reducers/paginationPages';

describe('paginationPages', () => {
  it('should return the amount of pages to paginate', () => {
    const state = null;

    const action = {
      type: c.CHANGE_RESULTS,
      paginationPages: 150
    };

    const expectedState = 150;

    const newState = paginationPages(state, action);

    expect(newState).toEqual(expectedState);
  });
});
