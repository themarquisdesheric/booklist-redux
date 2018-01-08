import c from './constants';

const books = (state = [], action) => {
  if (action.type === c.ADD_BOOK) {
    return [
      ...state,
      { 
        title: action.payload,
        read: false
      }
    ];
  }

  return state;
};

export default books;
