import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpeg'
import play_icon from '../../assets/play_icon.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className='about-right'>
            <h3>ABOUT CLEANING SERVICE</h3>
            <h2>Live in clean place</h2>



            <p>Cleaning services cover various settings, including offices, residential homes, construction sites, and private homes, each requiring specialized care: </p>

<p> <em><strong>Office Cleaning:</strong></em> This service focuses on maintaining a clean and organized workplace, including dusting, vacuuming, sanitizing surfaces, and managing waste. A clean office environment boosts employee productivity and leaves a positive impression on clients and visitors..</p>

<p> <strong>Residential Cleaning:</strong> Designed for private homes, this service includes thorough cleaning tasks such as sweeping, mopping, dusting, vacuuming, and sanitizing kitchens and bathrooms, ensuring a hygienic and comfortable living space for residents.

</p>

<p> <strong>Construction Cleaning:</strong> After construction or renovation work, sites are often left with debris and dust. Construction cleaning services specialize in removing these materials, ensuring the area is clean, safe, and ready for use.</p>

<p> <strong>Home Cleaning:</strong> Similar to residential cleaning, home cleaning provides routine or deep cleaning to maintain a tidy and pleasant living environment, customized to meet the homeowner's needs.</p>



           
        </div>

    </div>
  )
}

export default About