import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
        <ul>
          <li className="nav__item">
            <FaHome className="nav--icon" />
            <NavLink exact to="/" className="nav__link" onClick={() => setShowMenu(!showMenu)}>
              <h3 className="nav__name">Home</h3>
            </NavLink>
          </li>
          <li className="nav__item">
            <FaUser className="nav--icon" />
            <NavLink to="/about" className="nav__link" onClick={() => setShowMenu(!showMenu)}>
              <h3 className="nav__name">About</h3>
            </NavLink>
          </li>
          <li className="nav__item">
            <FaFolderOpen className="nav--icon" />
            <NavLink to="/portfolio" className="nav__link" onClick={() => setShowMenu(!showMenu)}>
              <h3 className="nav__name">Portfolio</h3>
            </NavLink>
          </li>
          <li className="nav__item">
            <FaEnvelopeOpen className="nav--icon" />
            <NavLink to="/contact" className="nav__link" onClick={() => setShowMenu(!showMenu)}>
              <h3 className="nav__name">Contact</h3>
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
        onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;

