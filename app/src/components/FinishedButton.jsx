import React from 'react';
import PropTypes from 'prop-types';

const FinishedButton = ({ toggleRead }) => (
  <button onClick={toggleRead}>
    Finished
  </button>
);

FinishedButton.propTypes = {
  toggleRead: PropTypes.func.isRequired
};

export default FinishedButton;
