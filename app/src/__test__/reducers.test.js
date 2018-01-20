import c from '../constants';
import books from '../reducers/books';
import visibilityFilter from '../reducers/visibilityFilter';
import fetching from '../reducers/fetching';

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

    expect(newState).toHaveLength(1);
  });

  it('prevents duplicate books from being added', () => {
    const state = [
      {
        title: 'sapiens'
      }
    ];

    const action = {
      type: c.ADD_BOOK,
      payload: {
        title: 'Sapiens'
      }
    };

    const newState = books(state, action);

    expect(newState).toHaveLength(1);
  });

  it('removes a book', () => {
    const state = [
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
    ];

    const action = {
      type: c.REMOVE_BOOK,
      payload: 1
    };

    const expectedState = [
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
    ];

    const newState = books(state, action);

    expect(newState).toEqual(expectedState);
  });

  it('toggles whether the book has been read', () => {
    const state = [
      {
        title: 'sapiens',
        id: 'someID',
        read: false
      }
    ];

    const action = {
      type: c.TOGGLE_READ,
      payload: 'someID'
    };

    const expectedState = [
      {
        title: 'sapiens',
        id: 'someID',
        read: true
      }
    ];

    const newState = books(state, action);

    expect(newState).toEqual(expectedState);
  });

  it('updates the order of books', () => {
    const state = [
      {
        title: 'sapiens',
        id: 'someID',
        read: false
      },
      {
        title: 'the magus',
        id: 'someOtherID',
        read: false
      }
    ];

    const action = {
      type: c.SET_ORDER,
      payload: state
    };

    const newState = books(state, action);

    expect(newState).toEqual(state);
  });

  it('updates the visibility filter', () => {
    const state = c.SHOW_ALL;

    const action = {
      type: c.SET_FILTER,
      payload: c.SHOW_READ
    };

    const expectedState = c.SHOW_READ;

    const newState = visibilityFilter(state, action);

    expect(newState).toEqual(expectedState);
  });
});

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
