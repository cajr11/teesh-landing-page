import React, { useState } from 'react'
import classes from "./ProvidedServices.module.css"

const ProvidedService = ({ service }) => {
    const [isDisplayed, setIsDisplayed] = useState (true);

    const arrowClickHandler = () => {
        setIsDisplayed(prevState => !prevState)
    }

  return (
    <div className={classes.container}>
        {/* Ellipse */}
        <div className={classes.ellipse}></div>

        {/* Service Name */}
        <h3 className={classes.service}>{service}</h3>

        {/* Arrow */}
        {isDisplayed && (
        <button type='button' className={classes.arrow} onClick={arrowClickHandler}>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M7.99586 0.823932C7.90355 0.823769 7.81496 0.86029 7.74961 0.925504L0.0977605 8.57736C-0.0357011 8.71551 -0.0318534 8.93571 0.106304 9.06917C0.241102 9.19934 0.454778 9.19934 0.589544 9.06917L7.99583 1.66357L15.4014 9.06986C15.5349 9.20801 15.7551 9.21183 15.8932 9.0784C16.0314 8.94494 16.0352 8.72477 15.9018 8.58658C15.899 8.58368 15.8962 8.58084 15.8932 8.57804L8.24143 0.926188C8.17634 0.860909 8.08801 0.82416 7.99586 0.823932Z" fill="#646464"/>
            </svg>
        </button>
        )}

        {!isDisplayed && (
        <button type='button' className={classes.arrow} onClick={arrowClickHandler}>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99574 9.17607C7.90343 9.17623 7.81484 9.13971 7.74949 9.0745L0.0976384 1.42264C-0.0358232 1.28449 -0.0319755 1.06429 0.106182 0.930829C0.24098 0.80066 0.454656 0.80066 0.589421 0.930829L7.99571 8.33643L15.4013 0.930144C15.5348 0.791987 15.7549 0.788172 15.8931 0.921601C16.0313 1.05506 16.0351 1.27523 15.9017 1.41342C15.8989 1.41632 15.896 1.41916 15.8931 1.42196L8.24131 9.07381C8.17622 9.13909 8.08789 9.17584 7.99574 9.17607Z" fill="#646464"/>
            </svg>
        </button>
        )}

        {/* Service Description */}
        <p className={isDisplayed ? classes.description : classes.hidden}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor lorem, vehicula eget est sed, malesuada suscipit magna. Curabitur eu consectetur augue. .
        </p>
    </div>
  )
}

export default ProvidedService;