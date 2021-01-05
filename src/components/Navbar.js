import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  const styles = {
    color: 'green'
  }
  return (
    <div>
      <Link to='/' style={{color: 'red'}} >Home </Link>
      <Link to='/App' style={styles} >Calculator</Link>
      <Link to='/Quate' style={styles} >Quote</Link>
    </div>
  );
};

export default Navbar;
