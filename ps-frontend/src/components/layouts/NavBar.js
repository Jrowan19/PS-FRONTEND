import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <nav>
      <ul class="nav justify-content-center bg-dark">
        <li className="nav-item">
          <Link className="nav-link active mr-5 text-danger h4" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ml-5 text-warning h4" to="/games">
            Game Library
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ml-5 text-info h4" to="/game">
            Add Your Game
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
