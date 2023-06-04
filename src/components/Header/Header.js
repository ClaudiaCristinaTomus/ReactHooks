import React from 'react'
import classes from './Header.module.scss';
import Logo from '../../UI/Logo/Logo'
import Nav from './Nav/Nav';
const Header = () => {
  return (
    <header className={classes.header}>
        <Logo/>
        <Nav/>
        <div className={classes.header__menu}>
            <div className={classes.header__menu__toggle}>{menuToggle}</div>
            <aside className={`${classes.menu} ${menuOpen && classes.show}`}></aside>
        </div>
    </header>
  )
}

export default Header