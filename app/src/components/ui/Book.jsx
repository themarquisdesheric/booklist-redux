import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import BookInfo from './BookInfo';
import Button from './Button';

const DragHandle = SortableHandle(() => <span className="drag-handle" >:::&nbsp;<br />:::&nbsp;</span>);

export const Book = ({ book, isSuggestion, addBook, removeBook, toggleRead, getBooks, history }) => (
  <div className="box">
    <article className="media">
      {!isSuggestion && !book.read && <DragHandle />}
      <figure className="media-left">
        {book.img ? 
          <img src={book.img} alt={book.title} /> :
          <div className="no-img" />
        }
      </figure>
      <div className="media-content">
        <div className="content">
          <BookInfo 
            title={book.title} 
            authors={book.authors} 
            snippet={book.snippet} 
            getBooks={getBooks} 
            history={history} 
          />
          
          {isSuggestion && 
            <Button clickHandler={() => addBook(book)}>
                <img src="add.png" alt="logo" className="button-icon" />Add Book
            </Button>
          }  
          
          {book.read && 
            <Button clickHandler={() => toggleRead(book.id)}>
              <img src="remove.png" alt="logo" className="button-icon" />Mark Unread
            </Button>
          }

          {!isSuggestion && !book.read &&
            <Button clickHandler={() => toggleRead(book.id)}>
              <img src="mark-read.png" alt="logo" className="button-icon" />Mark Read
            </Button> 
          }
        </div>
      </div>
      <div className="media-right">
        {!isSuggestion && 
          <Button className="delete" clickHandler={() => removeBook(book.id)} />
        }
      </div>
    </article>
  </div>
);

Book.defaultProps = {
  isSuggestion: false,
  addBook: () => {},
  removeBook: () => {},
  toggleRead: () => {},
  getBooks: () => {},
  history: {}
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    read: PropTypes.bool
  }).isRequired,
  isSuggestion: PropTypes.bool,
  addBook: PropTypes.func,
  removeBook: PropTypes.func,
  toggleRead: PropTypes.func,
  getBooks: PropTypes.func,
  history: PropTypes.shape({})
};

export const SortableBook = SortableElement(Book);
