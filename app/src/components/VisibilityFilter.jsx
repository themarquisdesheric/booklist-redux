import React from 'react';
import PropTypes from 'prop-types';

const VisibilityFilter = ({ value, setFilter }) => {
  return (
    <button onClick={setFilter}>
      {value}
    </button>
  );
};

VisibilityFilter.propTypes = {
  value: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default VisibilityFilter;
