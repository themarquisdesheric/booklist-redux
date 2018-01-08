import c from './constants';
import books from './reducers';

describe('books', () => {
  it('adds a book', () => {
    const state = {
      books: []
    };

    const action = {
      type: c.ADD_BOOK,
      payload: 'Sapiens'
    };
    
    const newState = books(state, action);
    expect(newState.books).toHaveLength(1);
  });
});
