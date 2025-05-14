import React, { useState } from 'react';
import { Link } from 'react-scroll'; // scroll için eklendi
import "./navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 400); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">BİRKAN ATMACA</div>

      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      <div className="navbar-links">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="project" smooth={true} duration={500}>Project</Link>
        <Link to="cv" smooth={true} duration={500}>CV</Link>
      </div>

      {menuOpen && (
        <div className={`mobile-menu ${closing ? 'closing' : ''}`}>
          <div className="close-btn" onClick={handleClose}>✕</div>
          <Link to="home" smooth={true} duration={500} onClick={handleClose}>Home</Link>
          <Link to="about" smooth={true} duration={500} onClick={handleClose}>About</Link>
          <Link to="project" smooth={true} duration={500} onClick={handleClose}>Project</Link>
          <Link to="cv" smooth={true} duration={500} onClick={handleClose}>CV</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
