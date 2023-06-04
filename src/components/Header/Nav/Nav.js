import React from 'react';
import classes from "./Nav.module.scss";


const Nav = ({isMenu,menuToggle}) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
        <ul>
            <li onClick={menuToggle}>
                <a href="/">Locations</a>
            </li>
            <li onClick={menuToggle}>
                <a href="/">Pricing</a>
            </li>
            <li onClick={menuToggle}>
                <a href="/">Learn More</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav