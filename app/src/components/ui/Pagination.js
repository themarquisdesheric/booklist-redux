import React from 'react';
import PropTypes from 'prop-types';
import PaginationLink from './PaginationLink';

const Pagination = ({ paginationPages }) => {
  // ! pick up here

  return (
    <nav className="pagination is-centered" aria-label="pagination">
      <ul className="pagination-list">
        
        <PaginationLink index={0} />
        <PaginationLink index={1} />
        <PaginationLink index={2} />

      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  paginationPages: PropTypes.number
};

export default Pagination;