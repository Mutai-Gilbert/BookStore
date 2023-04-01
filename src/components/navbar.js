import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  <nav>
    <h1> BookStore </h1>
    <ul>
      <li>
        <Link to="/" className="link"> Books </Link>
        <Link to="/categories" className="link"> Categories </Link>
      </li>
    </ul>

  </nav>;
};
export default Navbar;
