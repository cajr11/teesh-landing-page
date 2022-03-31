import React from 'react';
import classes from "./NavBar.module.css"

const NavBar = () => {
  return (
    <header className={classes.header}>
        <nav className={classes.nav}>
            <div className={classes.inner}>
                <h1 className={classes.navHeading}>TEESH</h1>

                {/* Nav Ellipse */}
                <div className={classes.navEllipse}></div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar