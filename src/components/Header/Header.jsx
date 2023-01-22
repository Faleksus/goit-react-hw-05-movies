import React from "react";

import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/goit-react-hw-05-movies" className="NavLink">
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
