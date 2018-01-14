import c from '../constants/books';
import { addBook } from '../actions';

describe('action creators', () => {
  it('addBook', () => {
    const title = 'sapiens';
    const action = addBook(title);

    expect(action.type).toBe(c.ADD_BOOK);
    expect(action.payload.title).toEqual(title);
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.read).toBeFalsy();
  });
});
