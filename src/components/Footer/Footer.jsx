import React from "react";

import { Link } from "react-router-dom";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <nav className={css.nav}>
        <Link to="/goit-react-hw-05-movies" className="NavLink">
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