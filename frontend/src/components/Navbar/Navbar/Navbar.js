import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import styles from Navbar.module.css

const Navbar = () => {
  return (
    <nav className={styles.nav}> {/* Use styles.nav instead of 'nav' */}
      <Link to="/" className={styles.navLink} >𝓘𝓝𝓣𝓔𝓡𝓥𝓘𝓔𝓦 𝓟𝓡𝓔𝓟𝓐𝓡𝓐𝓣𝓘𝓞𝓝</Link>
      <Link to="/Companies" className={styles.navLink} >Companies</Link>
      <Link to="/About" className={styles.navLink} >About</Link>
      <Link to="/Contact" className={styles.navLink} >Contact</Link>
      <Link to="/Signup" className={styles.navLink} >SignUp</Link>
    </nav>
  );
}

export default Navbar;
