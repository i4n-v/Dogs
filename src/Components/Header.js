import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Header.module.css';

function Header() {
  return (
    <div className={Styles.header}>
      <nav className="container">
        <Link to="/" end>Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  )
}

export default Header;
