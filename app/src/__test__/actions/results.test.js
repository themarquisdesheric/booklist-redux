import c from '../../constants';
import { changeResults, clearResults } from '../../actions';

describe('actions: results', () => {
  it('should create an action to change the book results', () => {
    const action = changeResults(['sapiens', 'the magus']);

    const expectedAction = {
      type: c.CHANGE_RESULTS,
      payload: ['sapiens', 'the magus']
    };

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to clear the book results', () => {
    const action = clearResults();

    const expectedAction = {
      type: c.CLEAR_RESULTS
    };

    expect(action).toEqual(expectedAction);
  });
});
