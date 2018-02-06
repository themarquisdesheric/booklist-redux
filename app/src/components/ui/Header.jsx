import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="title">
      <Link href to="/">
        Bookify.
      </Link>
    </h1>
  </header>
);

export default Header;
