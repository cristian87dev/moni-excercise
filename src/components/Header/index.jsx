import React from 'react';

import Nav from 'components/Nav';
import HeaderTitle from 'components/Header/Title';

import './Header.css';

const Header = () => (
  <header className="header">
    <HeaderTitle />
    <Nav />
  </header>
);

export default Header;
