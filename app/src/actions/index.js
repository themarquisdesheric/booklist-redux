import htmlToText from 'html-to-text';
import c from '../constants';

export const addBook = book => 
  ({
    type: c.ADD_BOOK,
    payload: {
      ...book,
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

export const setOrder = books => (dispatch, getState) => {
  let finishedBooks = getState().books.filter(book => book.read);
  
  dispatch({
    type: c.SET_ORDER,
    payload: [...books, ...finishedBooks]
  });
};

export const fetchBooks = (query) =>
  ({
    type: c.FETCH_BOOKS,
    payload: query
  });

export const cancelFetching = () =>
  ({
    type: c.CANCEL_FETCHING,
    payload: false
  });

export const changeResults = results =>
  ({
    type: c.CHANGE_RESULTS,
    payload: results
  });

export const clearResults = () =>
  ({
    type: c.CLEAR_RESULTS
  });

export const getBooks = (searchTerm, page = 0) => dispatch => {
  dispatch({
    type: c.FETCH_BOOKS,
    payload: searchTerm
  });

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(searchTerm)}&startIndex=${page}`)
    .then(response => response.json())
    .then(books => {
      const formattedBooks = books.items.map(book => {
        let img = book.volumeInfo.imageLinks 
          ? book.volumeInfo.imageLinks.smallThumbnail 
          : '';

        if (img) img = `https${img.slice(4)}`;
  
        return {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors || '',
          snippet: book.searchInfo ? htmlToText.fromString(book.searchInfo.textSnippet) : '',
          img,
          id: book.id
        };
      });

      dispatch({
        type: c.CHANGE_RESULTS,
        payload: formattedBooks
      });

      dispatch({
        type: c.CANCEL_FETCHING
      });
    });
};
