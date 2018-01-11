import shortid from 'shortid';
import c from './constants';

const initialState = {
  books: []
};

const books = (state = initialState, action) => {
  if (action.type === c.ADD_BOOK) {
    return {
      books: [
        ...state.books,
        { 
          title: action.payload,
          id: shortid.generate(),
          read: false
        }
      ]
    };
  }

  return state;
};

export default books;
