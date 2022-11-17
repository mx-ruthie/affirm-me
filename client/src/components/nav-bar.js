// src/components/nav-bar.js

import React from 'react';

import AuthNav from './auth-nav';
//import Favorites from './favorites';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <AuthNav />
          {/* <button>About</button>
          <button>Affirmations</button>
          <Favorites /> */}
          {/* <button>Custom</button> */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;