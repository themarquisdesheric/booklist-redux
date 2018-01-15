import c from '../constants';

const books = (state = [], action) => {
  switch (action.type) {
    case c.ADD_BOOK:   
      var duplicate = state.some(book => 
        book.title.toLowerCase() === action.payload.title.toLowerCase()
      );

      return (duplicate) 
        ? state 
        : [
          ...state,
          action.payload
        ];

    case c.REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);

    case c.TOGGLE_READ:
      return state.map(book => {
        if (book.id === action.payload) {
          return {
            ...book,
            read: !book.read
          };
        }
        
        return book;
      });
   
    default:
      return state;
  }
};

export default books;
