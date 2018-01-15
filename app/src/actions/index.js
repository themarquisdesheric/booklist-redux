import shortid from 'shortid';
import c from '../constants/books';

export const addBook = (title) => 
  ({
    type: c.ADD_BOOK,
    payload: {
      title,
      id: shortid.generate(),
      read: false
    }
  });

export const removeBook = (id) => 
  ({
    type: c.REMOVE_BOOK,
    payload: id
  });

export const toggleRead = (id) =>
  ({
    type: c.TOGGLE_READ,
    payload: id
  });
