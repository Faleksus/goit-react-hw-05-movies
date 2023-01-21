import React from "react";
// import PropTypes from 'prop-types'

import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className="NavLink">
          Home
        </NavLink>
        <NavLink to="/movies" className="NavLink">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

// Header.propTypes = {

// }
