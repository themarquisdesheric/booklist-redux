import shortid from 'shortid';
import c from './constants';

const initialState = {
  books: []
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case c.ADD_BOOK:
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

    case c.REMOVE_BOOK:
      return {
        books: state.books.filter(book => book.id !== action.payload)
      };
   
    default:
      return state;
  }
};

export default books;
