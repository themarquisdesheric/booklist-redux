import c from '../../constants';
import { addBook, removeBook, toggleRead } from '../../actions';

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
