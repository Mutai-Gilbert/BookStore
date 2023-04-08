import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { MdPerson } from 'react-icons/md';

const Navbar = () => (
  <nav>
    <h1 className="header">Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/" className="link"> Books </Link>
        <Link to="/categories" className="link"> Categories </Link>
      </li>
    </ul>
    <div className="oval">
      <MdPerson className="profile" />
    </div>
  </nav>
);

export default Navbar;
