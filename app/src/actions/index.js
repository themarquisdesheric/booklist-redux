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

export const fetchBooks = () =>
  ({
    type: c.FETCH_BOOKS,
    payload: true
  });

export const cancelFetching = () =>
  ({
    type: c.CANCEL_FETCHING,
    payload: false
  });

export const suggestBooks = searchTerm => dispatch => {
  let book, title, author, snippet, img;

  dispatch({
    type: c.FETCH_BOOKS
  });

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(searchTerm)}`)
    .then(response => response.json())
    .then(suggestions => {
      book = suggestions.items[0];
      title = book.volumeInfo.title;
      author = book.volumeInfo.authors[0] || '';
      snippet = book.searchInfo.textSnippet;
      img = book.volumeInfo.imageLinks.smallThumbnail;
      
      console.log(suggestions);
      
      dispatch({
        type: c.ADD_BOOK,
        payload: {
          title,
          author,
          snippet,
          img,
          id: shortid.generate(),
          read: false
        }
      });

      dispatch({
        type: c.CANCEL_FETCHING
      });
    });
};
