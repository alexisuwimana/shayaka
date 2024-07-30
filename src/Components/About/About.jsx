import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
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
            <h2>live in clean place</h2>
            <p>Hospitals are some of the biggest clients of industrial cleaning services, 
               as hospitals need to keep sanitary operations throughout the building. 
               Dealing with bio-hazardous materials, human waste products, and the potential 
               dangers of disease spread requires considerable knowledge of the subject, 
               and cleaning methods good enough for homes and offices may not be enough for hospitals.</p>                
            <p>Commercial cleaning in hospitals requires a level of knowledge on the dangers 
                of human and medical substances, which is why many hospitals take to a partner 
                cleaning company to train and advise cleaning crews on the proper disposal of 
                human organs, disease samples, skin grafts, tissues, and other medical waste deemed 
                hazardous for the regular landfill.</p>
        </div>

    </div>
  )
}

export default About