import React from "react";
// import PropTypes from 'prop-types'

import { Link } from "react-router-dom";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <nav className={css.nav}>
        <Link to="/" className="NavLink">
          Home
        </Link>
        <Link to="/movies" className="NavLink">
          Movies
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;