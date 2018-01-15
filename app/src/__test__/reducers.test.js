import c from '../constants';
import books from '../reducers/books';
import visibilityFilter from '../reducers/visibilityFilter';

describe('books', () => {
  it('adds a book', () => {
    const state = {
      books: []
    };

    const action = {
      type: c.ADD_BOOK,
      payload: {
        title: 'Sapiens'
      }
    };
    
    const newState = books(state, action);

    expect(newState.books).toHaveLength(1);
  });

  it('prevents duplicate books from being added', () => {
    const state = {
      books: [
        {
          title: 'sapiens'
        }
      ]
    };

    const action = {
      type: c.ADD_BOOK,
      payload: {
        title: 'Sapiens'
      }
    };

    const newState = books(state, action);

    expect(newState.books).toHaveLength(1);
  });

  it('removes a book', () => {
    const state = {
      books: [
        {
          title: 'sapiens',
          id: 0,
          read: false
        },
        {
          title: 'the magus',
          id: 1,
          read: false
        },
        {
          title: 'shantaram',
          id: 2,
          read: false
        },
      ]
    };

    const action = {
      type: c.REMOVE_BOOK,
      payload: 1
    };

    const expectedState = {
      books: [
        {
          title: 'sapiens',
          id: 0,
          read: false
        },
        {
          title: 'shantaram',
          id: 2,
          read: false
        },
      ]
    };

    const newState = books(state, action);

    expect(newState).toEqual(expectedState);
  });

  it('toggles whether the book has been read', () => {
    const state = {
      books: [
        {
          title: 'sapiens',
          id: 'someID',
          read: false
        }
      ]
    };

    const action = {
      type: c.TOGGLE_READ,
      payload: 'someID'
    };

    const expectedState = {
      books: [
        {
          title: 'sapiens',
          id: 'someID',
          read: true
        }
      ]
    };

    const newState = books(state, action);

    expect(newState).toEqual(expectedState);
  });

  it('updates the visibility filter', () => {
    const state = c.SHOW_ALL;

    const action = {
      type: c.SET_FILTER,
      payload: c.SHOW_READ
    };

    const expectedState = {
      visibilityFilter: c.SHOW_READ
    };

    const newState = visibilityFilter(state, action);

    expect(newState).toEqual(expectedState);
  });
});
