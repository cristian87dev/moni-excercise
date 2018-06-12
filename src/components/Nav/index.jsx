import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => (
  <nav className="nav-menu">
    <ul>
      <li className="nav-item">
        <Link className="link-item" to="/pedi-tu-prestamo">Pedí tu Prestamo</Link>
      </li>
      <li className="nav-item">
        <Link className="link-item" to="/user-admin">User Admin</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
