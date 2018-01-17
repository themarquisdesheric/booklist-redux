import shortid from 'shortid';
import c from '../constants';

export const addBook = title => 
  ({
    type: c.ADD_BOOK,
    payload: {
      title,
      id: shortid.generate(),
      read: false
    }
  });

export const removeBook = id => 
  ({
    type: c.REMOVE_BOOK,
    payload: id
  });

export const toggleRead = id =>
  ({
    type: c.TOGGLE_READ,
    payload: id
  });

export const setOrder = books =>
  ({
    type: c.SET_ORDER,
    payload: books
  });

export const setFilter = filter =>
  ({
    type: c.SET_FILTER,
    payload: filter
  });
