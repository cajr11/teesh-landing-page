import React from 'react'
import classes from "./Hero.module.css"
import heroImg from "../assets/hero_tea_cup.jpg"

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.inner}>

         {/* Hero Text & CTA */}
         <div className={classes.heroText}>
            <h1 className={classes.heroHeading}>Fullfill your most  peculiar tea wishes.</h1>
            <p className={classes.heroSubText}>From a common black tea to the rarest Da Hong Pao, each of them delivered right at your door.</p>
            <button type='button' className={classes.heroCta}>Learn more</button>
        </div>

        {/* Hero Image */}
        <div className={classes.heroImgContainer}>
            <img className={classes.heroImg} src={heroImg} alt='tea cup on top of a book beside dying sunflowers on floral patter table cloth'/>
        </div>

      </div>
    </div>
  )
}

export default Hero