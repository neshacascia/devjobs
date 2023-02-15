import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/desktop/logo.svg';
import sunIcon from '../assets/desktop/icon-sun.svg';
import moonIcon from '../assets/desktop/icon-moon.svg';

export default function Navbar(props) {
  return (
    <nav className="bg-nav h-36 flex justify-between items-center px-6 md:px-10 xl:bg-cover xl:px-40">
      <Link to="/">
        <img src={logo} />
      </Link>

      <div className="flex items-center gap-4">
        <img src={sunIcon} />

        <label className="w-toggler h-toggler relative inline-block">
          <input type="checkbox" className="w-0 h-0 opacity-0" />
          <span className="slider round" onClick={props.handleClick}></span>
        </label>

        <img src={moonIcon} />
      </div>
    </nav>
  );
}
