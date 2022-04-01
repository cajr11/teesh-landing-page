import React from 'react';
import classes from './PackContent.module.css'
import testimg from '../../assets/cta_tea_cup_desktop.jpg'

const PackContent = ({ image, title, info, rating }) => {
  return (
    <div className={classes.container}>

        {/* Pack Content Picture */}
        <img src={testimg} alt="" className={classes.image} />

           {/* Heading */}
           <h2 className={classes.heading}>Tea Pack 1</h2>

        {/* Description */}
        <p className={classes.description}>
            Experience the world of black teas in one sample set.
        </p>

    </div>
  )
}

export default PackContent