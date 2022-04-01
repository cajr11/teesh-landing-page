import React from 'react';
import classes from './PackContent.module.css'

const PackContent = ({ image, title, info, rating }) => {
  return (
    <div className={classes.container}>

        {/* Pack Content Picture */}
        <img src={image} alt="" className={classes.image} />

           {/* Heading */}
           <h2 className={classes.heading}>{title}</h2>

        {/* Description */}
        <p className={classes.description}>
           {info}
        </p>

        <p className={classes.rating}>{rating}/5
                <span className={classes.star}>
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8334 4.38996L7.63925 4.02829L6.00008 0.166626L4.36091 4.03413L0.166748 4.38996L3.35175 7.14913L2.39508 11.25L6.00008 9.07413L9.60508 11.25L8.65425 7.14913L11.8334 4.38996ZM6.00008 7.98329L3.80675 9.30746L4.39008 6.81079L2.45341 5.13079L5.00842 4.90913L6.00008 2.55829L6.99758 4.91496L9.55258 5.13663L7.61592 6.81663L8.19925 9.31329L6.00008 7.98329Z" fill="#24404F" fillOpacity="0.8"/>
                    </svg>
                </span>
            </p>

    </div>
  )
}

export default PackContent