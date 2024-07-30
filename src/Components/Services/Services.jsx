import React from 'react'
import './Services.css'
import service_1 from '../../assets/service-31.jpg'
import service_2 from '../../assets/service-32.jpg'
import service_3 from '../../assets/service-3.jpg'
import service_4 from '../../assets/service-33.jpg'
import service_icon_1 from '../../assets/service-icon-1.jpg'
import service_icon_2 from '../../assets/service-icon-2.jpg'
import service_icon_3 from '../../assets/service-icon-3.jpg'
import service_icon_4 from '../../assets/service-icon-4.jpg'

const Services = () => {
  return (
    <div className='services'>
        <div className='service'>
            <img src={service_1} alt=''/>
            <div className='caption'>
                <img src={service_icon_1} alt=''/>
                <p>Office Cleaning</p>
            </div>
        </div>
        <div className='service'>
            <img src={service_2} alt=''/>
            <div className='caption'>
                <img src={service_icon_2} alt=''/>        
                <p>Residential Cleaning</p>
            </div>
        </div>
        <div className='service'>
            <img src={service_3} alt=''/>
            <div className='caption'>
                <img src={service_icon_3} alt=''/>
                <p>Construction Cleaning</p>
            </div>
        </div>
        <div className='service'>
            <img src={service_4} alt=''/>
            <div className='caption'>
                <img src={service_icon_4} alt=''/>
                <p>Home Cleaning</p>
            </div>
        </div>
    </div>
  )
}

export default Services