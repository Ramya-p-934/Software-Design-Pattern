import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.jpg'; // Adjust the path to your logo image
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-title">
        <img src={logoImage} alt="Logo" className="navbar-logo" />
        <h1>Real Estate Management</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/property">Property</Link></li>
        <li><Link to ="/rent">Rent</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;