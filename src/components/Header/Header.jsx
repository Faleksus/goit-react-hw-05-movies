import React from 'react'
// import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
        <nav className={css.nav}>
        <NavLink to="/" className="NavLink">
            Home
        </NavLink>
        <NavLink to="/search" className="NavLink">
            Search
        </NavLink>
        </nav>
    </header>
  )
}

// Header.propTypes = {

// }