import React from 'react'
import classes from "./Locations.module.scss";


import country1 from "./../../assets/1.jpg";
import country2 from "./../../assets/2.jpg";
import country3 from "./../../assets/3.jpg";
import country4 from "./../../assets/4.jpg";
import country5 from "./../../assets/5.jpg";
import country6 from "./../../assets/6.jpg";

const locationData=[
    {id :1 , location:"Bora Bora", isFeatured:true,img:country1},
    {id :2 , location:"Bora Bora", isFeatured:true,img:country2},
    {id :3 , location:"Bora Bora", isFeatured:false,img:country3},
    {id :4 , location:"Bora Bora", isFeatured:true,img:country4},
    {id :5 , location:"Bora Bora", isFeatured:true,img:country5},
    {id :6 , location:"Bora Bora", isFeatured:true,img:country6},
];

const Locations = () => {
  return (
    <div className={classes.container}>
        <div className={classes.locations}>
            <div className={classes.locations__content}>
                <h2 className={classes.locations__content__title}>Discover the world</h2>
                <div className={classes.locations__content__gallery}>
                    {locationData.map(({id,location,isFeatured,img}) =>(
                        <div className={classes.gallery__item} key={id}> 
                        <img src={img}
                        alt={location}
                        className={classes.gallery__item__img}
                        />
                        <div className={classes.overlay}/>
                        <div className={classes.gallery__item__content}>
                            <h2 className={classes.gallery__item__content__location}>
                                {location}
                            </h2>
                        </div>

                        {isFeatured && (
                            <div className={classes.gallery__item__tag}>Featured</div>
                        )}
                        </div>
                    )
                    )}
                </div>
                <div className={classes.locations__content__viewmore}>
                    <a href="/">
                        view more
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations