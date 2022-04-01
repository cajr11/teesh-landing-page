import React from 'react';
import classes from './TeaDetails.module.css'
import PackContent from './PackContent';

const TeaDetails = ({ image, title, description, content }) => {
  return (
    <div className={classes.container}>
        {/* Tea pack picture */}
        <img src={image} alt="" className={classes.image} />

        {/* Tea pack details */}
        <div className={classes.content}>

            {/* Heading */}
            <h2 className={classes.heading}>{title}</h2>

            {/* Description */}
            <p className={classes.description}>
                {description}
            </p>

            {/* Pack Contents Container */}
            <div className={classes.packContents}>
                {content && content.map(item =>
                    (
                    <PackContent key={item["tea_id"]} image={item.picture} title={item.name} rating={item.rating} info={item.description}/>
                    )
                )}
            </div>

            {/* Cta */}
            <button type='button' className={classes.cta}>Sign up</button>

        </div>
    </div>
  )
}

export default TeaDetails