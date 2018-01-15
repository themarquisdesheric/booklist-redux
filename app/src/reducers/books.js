import c from '../constants';

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

    case c.TOGGLE_READ:
      return {
        books: state.books.map(book => {
          if (book.id === action.payload) {
            return {
              ...book,
              read: !book.read
            };
          }
          
          return book;
        })
      };
   
    default:
      return state;
  }
};

export default books;
