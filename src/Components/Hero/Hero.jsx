import React from 'react'
import './Hero.css'
//import dark_arrow from '../../assets/cleaning_13.jpg'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better Cleaning for your place</h1>
            <p>We are a locally owned, small business, employing people (people, who we might add, are exceptional human beings!) 
              in YOUR community. Unlike the well-known, national cleaning chains’ systematic approach, we pride ourselves on being 
              able to offer you a customized, high-quality service that fits into your life just the way you need it to. </p>
            <button className='btn'>Explore more </button>
        </div>
    </div>
  )
}

export default Hero