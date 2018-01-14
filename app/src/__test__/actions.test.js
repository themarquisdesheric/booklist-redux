import c from '../constants/books';
import { addBook, removeBook } from '../actions';

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
    expect(action.payload).toBeTruthy();
  });
});
