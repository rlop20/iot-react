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
        <div class="menu-icon">&#9776;</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Activities.js">Activities</Link>
          </li>

          <li>
            <Link to="/Research.js">Research</Link>
          </li>

        </ul>
      </div>

      <script>
        
      </script>
    </nav>

  );
}

export default Header;
