import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/desktop/logo.svg';
import sunIcon from '../assets/desktop/icon-sun.svg';
import moonIcon from '../assets/desktop/icon-moon.svg';

export default function Navbar(props) {
  return (
    <nav>
      <Link to="/">
        <img className="nav-logo" src={logo} />
      </Link>

      <div className="toggle-container">
        <img src={sunIcon} />

        <label className="toggler">
          <input type="checkbox" />
          <span className="slider round" onClick={props.handleClick}></span>
        </label>

        <img src={moonIcon} />
      </div>
    </nav>
  );
}
