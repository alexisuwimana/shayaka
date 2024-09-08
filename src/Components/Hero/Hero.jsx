import React from 'react'
import './Hero.css'
//import dark_arrow from '../../assets/cleaning_13.jpg'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Ensuring a Cleaner, Happier Place for You</h1>
            <p>We are a locally owned small business dedicated to providing top-notch cleaning services tailored to your unique needs. 
              Our team is made up of exceptional individuals from your community who take pride in delivering customized, high-quality care. 
              Unlike national cleaning chains with a one-size-fits-all mentality, we believe in a more personalized approach, 
              ensuring that our services seamlessly fit into your life.</p>
            <button className='btn'>Explore more </button>
        </div>
    </div>
  )
}

export default Hero