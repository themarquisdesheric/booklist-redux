import React from 'react';
import { Link } from 'react-router-dom';

// make 'you need to add more books' component with matching icon for /reading-list

const GetStarted = () => {
  const content = [{
    src: 'book-shelf', 
    caption: `Add the books you're currently reading` 
  }, {
    src: 'book-stack', 
    caption: 'Decide which book you want to read next'
  }, {
    src: 'document',
    caption: 'Save finished books for easy reference'
  }, {
    src: 'search-property',
    caption: 'Find new books to read'
  }];

  return (
    <div className="get-started">
      <div className="box">
        <h3 className="title is-4 is-uppercase">Manage the books in your life</h3>

        {content.map( ({ src, caption }) => (
          <div key={src} className="level">
            <div className="level-left">
              <p className="level-item">
                <span className="icon is-large">
                  <img src={`${src}.png`} alt={src} />
                </span>
                {caption}
              </p>
            </div>
          </div>
        ))}

        <Link href to="/reading-list" className="button button-gradient is-uppercase button-get-started">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
