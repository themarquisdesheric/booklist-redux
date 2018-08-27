import React from 'react';
import PaginationLink from './PaginationLink';

const Pagination = ({ getBooks, history }) => (
  <nav className="pagination is-centered" aria-label="pagination">
    <ul className="pagination-list">

      {/* // ! for as long as there are results / 10 */}
      
      <PaginationLink getBooks={getBooks} history={history} index={0} />
      <PaginationLink getBooks={getBooks} history={history} index={1} />
      <PaginationLink getBooks={getBooks} history={history} index={2} />

    </ul>
  </nav>
);

export default Pagination;