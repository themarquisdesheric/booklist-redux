import React from 'react';
import PaginationLink from './PaginationLink';

const Pagination = () => (
  <nav className="pagination is-centered" aria-label="pagination">
    <ul className="pagination-list">

      {/* // ! for as long as there are results / 10 */}
      
      <PaginationLink index={0} />
      <PaginationLink index={1} />
      <PaginationLink index={2} />

    </ul>
  </nav>
);

export default Pagination;