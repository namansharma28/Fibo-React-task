import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>

      {/* Hamburger button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation menu with mobile support */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li href="#">Menu</li>
        <li href="#">Genre</li>
        <li href="#">About</li>
        <li href="#">Top-Picks</li>
        <li href="#">Contact</li>
      </ul>

      <button className="login-btn">LogIn</button>
    </nav>
  );
};

export default Navigation;
