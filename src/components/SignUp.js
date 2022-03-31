import React, { useEffect, useState } from 'react';
import classes from "./SignUp.module.css";
import ctaTeaCup from "../assets/cta_tea_cup_desktop.jpg";
import ctaTeaCupMobile from "../assets/cta_tea_cup_mobile.jpg";

const SignUp = () => {
  const [isMobile, setIsMobile] = useState(false);

  const windowSize = window.innerWidth;

  useEffect(() => {
    console.log(windowSize);
    if (windowSize > 481){
        setIsMobile(true);
    } else {
        setIsMobile(false)
    }
  },[windowSize])

  return (
    <footer className={classes.container}>

        {/* Signup */}
        <div className={classes.signup}>
            <div className={classes.signupText}>

                {/* Heading */}
                <h3 className={classes.heading}>SIGN UP</h3>

                {/* Info */}
                <p className={classes.info}>
                    Get the best tea experience you'll  ever taste right at your door each month
                </p>

                {/* CTA */}
                <button type='button' className={classes.cta}>Sign up</button>
            </div>
        </div>

        {/* Tea cup image */}
       <div className={classes.teaCupContainer}>
            {!isMobile && (<img className={classes.teaCup} src={ctaTeaCup} alt="tea cup filled with tea and clay pot of tea on wooden table"/>)}
            {isMobile && (<img className={classes.teaCup} src={ctaTeaCupMobile} alt="tea cup filled with tea and clay pot of tea on wooden table"/>)}
       </div>
    </footer>
  )
}

export default SignUp;