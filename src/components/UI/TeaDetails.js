import React from 'react';
import classes from './TeaDetails.module.css'
import testimg from '../../assets/cta_tea_cup_desktop.jpg'
import PackContent from './PackContent';

const TeaDetails = () => {
  return (
    <div className={classes.container}>
        {/* Tea pack picture */}
        <img src={testimg} alt="" className={classes.image} />

        {/* Tea pack details */}
        <div className={classes.content}>

            {/* Heading */}
            <h2 className={classes.heading}>Tea Pack 1</h2>

            {/* Description */}
            <p className={classes.description}>
                Experience the world of black teas in one sample set. This is a great way to learn the wide range of flavors offered by black tea.
            </p>

            {/* Pack Contents Container */}
            <div className={classes.packContents}>
                <PackContent />
                <PackContent />
                <PackContent />
            </div>

            {/* Cta */}
            <button type='button' className={classes.cta}>Sign up</button>

        </div>
    </div>
  )
}

export default TeaDetails