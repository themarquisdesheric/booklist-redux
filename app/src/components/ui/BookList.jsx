import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import BookIcon from 'react-icons/lib/fa/book';
import FilesIcon from 'react-icons/lib/fa/file-text';
import Tabs from './Tabs';
import { SortableBook, Book } from './Book';
import AddBook from './AddBook';

const SortableBookList = SortableContainer( ({ items, removeBook, toggleRead }) => (
  <ul>
    {items.map( (book, index) => (
      <SortableBook key={`item-${book.title}`} index={index} book={book} removeBook={removeBook} toggleRead={toggleRead} />
    ))}
  </ul>
));

class BookList extends Component {
  onSortEnd = ({ oldIndex, newIndex }) => {
    const sortedBooks = arrayMove(this.props.books, oldIndex, newIndex);
    this.props.setOrder(sortedBooks);
  };

  render() {
    const { books, visibilityFilter, suggestBooks, removeBook, toggleRead } = this.props;

    return (
      <div className="booklist">
        <Tabs 
          filters={['Reading List', 'Finished Books']} 
          icons={[BookIcon, FilesIcon]} 
          visibilityFilter={visibilityFilter} 
        />

        <Route
          path="/reading-list"
          component={() => 
            <SortableBookList items={books} onSortEnd={this.onSortEnd} removeBook={removeBook} toggleRead={toggleRead} />
          } 
        />
        <Route 
          path="/finished-books"
          component={() => (
            <ul>
              {books.map(book => <Book key={book.title} book={book} removeBook={removeBook} toggleRead={toggleRead} />)}
            </ul>
          )}
        />

        <AddBook addBook={suggestBooks} />
        {this.props.fetching && 'loading...'}
      </div>
    );
  }
}

BookList.defaultProps = {
  books: []
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      read: PropTypes.bool.isRequired
    })
  ),
  visibilityFilter: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  suggestBooks: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
  toggleRead: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired
};

export default BookList;
