import React from 'react'
import classes from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={classes.heroContainer}>

        {/* Hero Text & CTA */}
        <div className={classes.heroText}>
            <h1 className={classes.heroHeading}>Fullfill your most  peculiar tea wishes.</h1>
            <p className={classes.heroSubText}>From a common black tea to the rarest Da Hong Pao, each of them delivered right at your door.</p>
            <button type='button' className={classes.heroCta}>Learn more</button>
        </div>

        {/* Hero Image */}
        <div></div>
    </div>
  )
}

export default Hero