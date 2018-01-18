import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import VisibilityFilter from './VisibilityFilter';
import Book from './Book';
import AddBook from './AddBook';
import c from '../constants';

const SortableBookList = SortableContainer( ({ items, removeBook, toggleRead }) => (
  <ul>
    {items.map( (book, index) => (
      <Book key={`item-${book.title}`} index={index} book={book} removeBook={removeBook} toggleRead={toggleRead} />
    ))}
  </ul>
));

class BookList extends Component {
  onSortEnd = ({ oldIndex, newIndex }) => {
    // only allow sorting on main view
    if (this.props.visibilityFilter !== c.SHOW_ALL) return;

    const sortedBooks = arrayMove(this.props.books, oldIndex, newIndex);
    this.props.setOrder(sortedBooks);
  };

  render() {
    const { books, addBook, removeBook, toggleRead, setFilter } = this.props;
    const filters = {
      'All Books': c.SHOW_ALL,
      'Unread Books': c.SHOW_UNREAD,
      'Finished Books': c.SHOW_READ
    };

    return (
      <div>
        {Object.keys(filters).map(filter => 
          <VisibilityFilter key={filter} value={filter} setFilter={() => setFilter(filters[filter])} />
        )}
        <SortableBookList items={books} onSortEnd={this.onSortEnd} removeBook={removeBook} toggleRead={toggleRead} />
        <AddBook addBook={addBook} />
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
  addBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
  toggleRead: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default BookList;
