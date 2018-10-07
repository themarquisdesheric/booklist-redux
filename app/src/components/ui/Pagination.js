import React from 'react';
import PropTypes from 'prop-types';
import PaginationLink from './PaginationLink';

// TODO: pick up with paginationPages here

const Pagination = ({ paginationPages }) => (
  <nav className="pagination is-centered" aria-label="pagination">
    <ul className="pagination-list">
      {(paginationPages >= 3)
          ? [1,2,3].map( (_, index) => 
              <PaginationLink key={index} index={index} />
            )
          : (paginationPages === 2)
              ? [1,2].map( (_, index) => 
                  <PaginationLink key={index} index={index} />
                )
              : <PaginationLink active />
      }
    </ul>
  </nav>
);

Pagination.propTypes = {
  paginationPages: PropTypes.number
};

export default Pagination;