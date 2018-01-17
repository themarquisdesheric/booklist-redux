import c from '../constants';
import { addBook, removeBook, toggleRead, setFilter } from '../actions';

describe('actions', () => {
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

  it('should create an action to update the list order', () => {
    const books = [{title: 'sapiens'}, {title: 'the magus'}];

    const expectedAction = {
      type: c.SET_ORDER,
      payload: [{title: 'sapiens'}, {title: 'the magus'}]
    };
    
    const action = setOrder(books);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to update the visibility filter', () => {
    const action = setFilter(c.SHOW_READ);

    expect(action.type).toBe(c.SET_FILTER);
    expect(action.payload).toBe(c.SHOW_READ);
  });
});
