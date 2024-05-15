import React from 'react';
import './App.css'; // CSS file for styling
import photo2 from './photos/Pima-Community-College.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#">
          <img src={photo2} alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/Home.js">Home</Link>
          </li>

          <li>
            <Link to="/Activities.js">Activities</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Header;
