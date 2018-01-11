import shortid from 'shortid';
import c from './constants';

export const addBook = (title) => 
  ({
    type: c.ADD_BOOK,
    payload: {
      title,
      id: shortid.generate(),
      read: false
    }
  });
