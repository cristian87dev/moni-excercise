import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from 'assets/images/moni-logo.svg';

const HeaderTitle = () => (
  <h1 className="title">
    <Link to="/">
      <img src={logo} alt="Moni Logo" />
    </Link>
  </h1>
);

export default HeaderTitle;
