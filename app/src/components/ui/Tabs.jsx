import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ visibilityFilter }) => {
  const content = [{
    src: 'book.png', 
    value: 'Reading List'
  }, {
    src: 'mark-read.png', 
    value: 'Finished Books'
  }];

  return (
    <div className="tabs is-fullwidth is-toggle">
      {content.map( ({ src, value }) => {

        return (
          <Tab 
            key={value}
            value={value}
            visibilityFilter={visibilityFilter}
          >
            <img src={src} alt={value} className="button-icon" />
          </Tab>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  visibilityFilter: PropTypes.string
};

export default Tabs;
