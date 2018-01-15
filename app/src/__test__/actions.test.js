import c from '../constants/books';
import { addBook, removeBook, toggleRead } from '../actions';

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

  it('should create an action to update the visibility filter', () => {
    const action = setFilter('read');

    expect(action.type).toBe(c.SET_FILTER);
    expect(action.payload).toBe('read');
  });
});
