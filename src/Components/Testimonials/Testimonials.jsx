import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.jpg'
import back_icon from '../../assets/back-icon.jpg'
import number1 from '../../assets/number1.png'
import number2 from '../../assets/number2.png'
import number3 from '../../assets/number3.png'
import number4 from '../../assets/number4.png'
// import number5 from '../../assets/number5.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={number1} alt='' />
                           <p><h3>We Are Dedicated</h3>We’ re in it for the long run, with a mission to deliver consistent cleaning services that guarantee lasting customer satisfaction.</p>
                        </div>
        
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={number2} alt='' />
                            <p><h3>We Are Driven.</h3> We are committed to upholding the highest standards and constantly enhancing every aspect of our business.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={number3} alt='' />
                            <p><h3>We Are Complete.</h3>We take a proactive approach to ensure exceptional cleaning with every service.</p>
                        </div>
        
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={number4} alt='' />
                            <p><h3>We Are Committed.</h3>Our actions are driven entirely by our customers and their needs.</p>
                        </div>
                        
                    </div>
                    {/* <div className='slide'>
                        <div className='user-info'>
                            <img src={number5} alt='' />
                            <p><h3>We Are Experts.</h3>We lead the industry in both scale and scope, consistently delivering outstanding results.</p>
                        </div> 
                    </div>*/}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials