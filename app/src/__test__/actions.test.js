import c from '../constants';
import { addBook, removeBook, toggleRead, fetchBooks, cancelFetching, changeSuggestions } from '../actions';

describe('actions: books', () => {
  it('should create an action to add a book', () => {
    const title = 'sapiens';
    const action = addBook(title);

    expect(action.type).toBe(c.ADD_BOOK);
    expect(action.payload.title).toEqual(title);
    expect(action.payload.id).toBeTruthy();
    expect(typeof action.payload.id).toBe('string');
    expect(action.payload.read).toBeFalsy();
  });
  
  it('should create an action to remove a book', () => {
    const action = removeBook('someID');

    expect(action.type).toBe(c.REMOVE_BOOK);
    expect(action.payload).toBe('someID');
  });

  it('should create an action to toggle whether the book has been read', () => {
    const action = toggleRead(5);

    expect(action.type).toBe(c.TOGGLE_READ);
    expect(action.payload).toBe(5);
  });
});

describe('actions: fetching', () => {
  it('should create an action to set fetching to true when fetching books', () => {
    const action = fetchBooks();

    const expectedAction = {
      type: c.FETCH_BOOKS,
      payload: true
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

describe('actions: suggestions', () => {
  it('should create an action to change the book suggestions', () => {
    const action = changeSuggestions(['sapiens', 'the magus']);

    const expectedAction = {
      type: c.CHANGE_SUGGESTIONS,
      payload: ['sapiens', 'the magus']
    };

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to clear the book suggestions', () => {
    const action = clearSuggestions();

    const expectedAction = {
      type: c.CLEAR_SUGGESTIONS
    };

    expect(action).toEqual(expectedAction);
  });
});
