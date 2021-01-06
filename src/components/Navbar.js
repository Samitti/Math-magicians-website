import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const styles = {
    color: 'green',
  };
  return (
    <div className="topAll">
      <h1>
        Math Magicians
      </h1>
      <nav className="navLink">
        <p><Link to="/" style={styles}>Home</Link></p>
        <p className="linkSplit">|</p>
        <p><Link to="/App" style={styles}>Calculator</Link></p>
        <p className="linkSplit">|</p>
        <p><Link to="/Quote" style={styles}>Quote</Link></p>
      </nav>
    </div>
  );
};

export default Navbar;
