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
          <NavLink
            exact
            to="/"
            activeClassName="active_link"
            onClick={() => setShowMenu(!showMenu)}>
            <li className="nav__item">
              <FaHome className="nav--icon" />
              <div className="nav__name__box">
                <h3 className="nav__name">Home</h3>
              </div>
            </li>
          </NavLink>
          <NavLink to="/about" activeClassName="active_link" onClick={() => setShowMenu(!showMenu)}>
            <li className="nav__item">
              <FaUser className="nav--icon icon-user" />
              <div className="nav__name__box">
                <h3 className="nav__name">Home</h3>
              </div>
            </li>
          </NavLink>
          <NavLink
            to="/portfolio"
            activeClassName="active_link"
            onClick={() => setShowMenu(!showMenu)}>
            <li className="nav__item">
              <FaFolderOpen className="nav--icon" />
              <div className="nav__name__box">
                <h3 className="nav__name">Home</h3>
              </div>
            </li>
          </NavLink>
          {/*  <NavLink to="/contact"   activeClassName="active_link" onClick={() => setShowMenu(!showMenu)}>
          <li className="nav__item">
            <FaEnvelopeOpen className="nav--icon" />
              <h3 className="nav__name">Contact</h3>
  </li>
  </NavLink>*/}
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

