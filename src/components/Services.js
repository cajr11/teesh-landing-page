import React from 'react';
import ProvidedService from './ProvidedService';
import classes from "./Services.module.css"

const Services = () => {
  return (
    <section className={classes.container}>
         {/* Heading */}
         <h2 className={classes.heading}>Why Us</h2>

        <div className={classes.inner}>
            {/* Services */}
            <ProvidedService service="Home Delivery" />
            <ProvidedService service="Tea Personalization" />
            <ProvidedService service="Premium Quality" />
        </div>
    </section>
  )
}

export default Services