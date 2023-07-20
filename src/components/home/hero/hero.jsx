import React from 'react';
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
            <div className="row">
                <h1>Все для організації навчання</h1>
            </div>
            <button className='primary-btn'>
                Get Started <i className='fa fa-long-arrow-alt-right'></i>
            </button>

        </div>
      </section>
<div className="margin"></div>
    </>
  )
}

export default Hero;
