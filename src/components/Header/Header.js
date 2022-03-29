import React from 'react';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>Search</li>
          <li>How it works</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
