import React from 'react';
import logo from './../../assets/logo.jpg';

import classes from "./Logo.module.scss";


const Logo = () => {
  return (
    <a href="/" className={classes.logo}>
        {logo}
        <span>Travel</span>
    </a>
  )
}

export default Logo