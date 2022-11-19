// src/components/nav-bar.js

import React from 'react';

import AuthNav from './auth-nav';
//import Favorites from './favorites';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar">
          <AuthNav />
      </nav>
    </div>
  );
};

export default NavBar;