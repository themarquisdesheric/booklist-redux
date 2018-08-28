import c from '../constants';
import { 
  addBook, 
  removeBook, 
  toggleRead, 
  fetchBooks, 
  cancelFetching, 
  changeResults, 
  clearResults
} from '../actions';

describe('actions: books', () => {
  it('should create an action to add a book', () => {
    const book = {
      title: 'sapiens',
      id: 'someID',
      read: false
    };

    const action = addBook(book);

    expect(action.type).toBe(c.ADD_BOOK);
    expect(action.payload.title).toEqual('sapiens');
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
