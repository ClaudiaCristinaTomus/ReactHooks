import React from 'react';
import logo from './../../assets/logo.jpg';

import classes from "./Logo.module.scss";


const Logo = () => {
  return (
    <a href="/" className={classes.logo}>
        <img className={classes.logo__img}
        src={logo}>
        </img>
        <span>Travel</span>
    </a>
  )
}

export default Logo