import c from '../constants/books';

const initialState = {
  books: []
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case c.ADD_BOOK:   
      var duplicate = state.books.some(book => 
        book.title.toLowerCase() === action.payload.title.toLowerCase()
      );

      return (duplicate) 
        ? state 
        : {
          books: [
            ...state.books,
            action.payload
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
