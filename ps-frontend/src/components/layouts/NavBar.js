import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <div>
      <ul class="nav justify-content-center bg-dark">
        <li className="nav-item">
          <Link className="nav-link active mr-5" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ml-5" to="/games">
            Games
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
