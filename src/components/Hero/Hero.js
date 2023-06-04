import React from 'react'
import background from './../../assets/background.jpg';
import classes from "./Hero.module.scss";
import Button from '../../UI/Button/Button';

const Hero = () => {
  return (
    <div className={classes.container}>
        <img src={background}></img>
        <div className={classes.hero}>
            <div className={classes.hero__content}>
                <h1 className={classes.hero__content__title}>I am waiting</h1>
                <span className={classes.hero__content__tagline}>
                    Let us know what you want
                </span>
                <p className={classes.hero__content__description}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                </p>
                <div className={classes.hero__content__cta}>
                    <Button>Book now</Button>
                    <Button>Learn more</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero