import c from './constants';

const books = (state = [], action) => {
  if (action.type === c.ADD_BOOK) {
    return {
      books: 
        [
          ...state,
          action.payload
        ]
    };
  }

  return state;
};

export default books;