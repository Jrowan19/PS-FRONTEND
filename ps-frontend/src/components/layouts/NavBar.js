import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand text-primary ml-4" to="/">
        <i className="fab fa-playstation "></i>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link active ml-5 mr-5 text-danger h4" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ml-5 mr-5  text-warning h4" to="/games">
              Game Library
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link ml-5 mr-5  text-info h4" to="/game">
              Add Your Game
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
