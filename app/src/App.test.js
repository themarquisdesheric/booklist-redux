import c from './constants';
import books from './reducers';

describe('books', () => {
  it('adds a book', () => {
    const state = [];

    const action = {
      type: c.ADD_BOOK,
      payload: {
        title: 'Sapiens'
      }
    };
    
    const newState = books(state, action);

    expect(newState.books).toHaveLength(1);
  });
});
