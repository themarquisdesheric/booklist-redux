import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import BookIcon from 'react-icons/lib/fa/book';
import FilesIcon from 'react-icons/lib/fa/file-text';
import Tab from './Tab';
import { SortableBook, Book } from './Book';
import AddBook from './AddBook';
import c from '../constants';

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
    const { books, visibilityFilter, suggestBooks, removeBook, toggleRead, setFilter } = this.props;
    const icons = [BookIcon, FilesIcon];
    const filters = {
      'Reading List': c.SHOW_UNREAD,
      'Finished Books': c.SHOW_READ
    };

    return (
      <div className="booklist">
        <div className="tabs is-fullwidth is-toggle">
          {Object.keys(filters).map( (filter, i) => {
            const Icon = icons[i];

            return (
              <Tab 
                key={filter}
                setFilter={() => setFilter(filters[filter])} 
                value={filter}
                active={filters[filter] === visibilityFilter}
              >
                <Icon />
              </Tab>
            );
          })}
        </div>

        <SortableBookList items={books} onSortEnd={this.onSortEnd} removeBook={removeBook} toggleRead={toggleRead} />
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
  setOrder: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default BookList;
