import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <nav class="nav navbar-expand-lg navbar-light bg-dark">
      <Link class="navbar-brand text-primary ml-4" to="/">
        <i class="fab fa-playstation "></i>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
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
