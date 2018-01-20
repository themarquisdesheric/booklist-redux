import React from 'react';
import PropTypes from 'prop-types';

const FinishedButton = ({ toggleRead }) => (
  <button className="button is-success" onClick={toggleRead}>
    Mark completed
  </button>
);

FinishedButton.propTypes = {
  toggleRead: PropTypes.func.isRequired
};

export default FinishedButton;
