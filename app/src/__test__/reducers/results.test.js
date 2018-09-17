import c from '../../constants';
import results from '../../reducers/results';

describe('results', () => {
  it('changes the suggested books', () => {
    const state = [];

    const action = {
      type: c.CHANGE_RESULTS,
      payload: ['sapiens', 'the magus']
    };

    const expectedState = ['sapiens', 'the magus'];

    const newState = results(state, action);

    expect(newState).toEqual(expectedState);
  });

  it('clears the suggested books', () => {
    const state = ['sapiens', 'the magus'];

    const action = {
      type: c.CLEAR_RESULTS
    };

    const newState = results(state, action);

    expect(newState).toEqual([]);
  });
});
