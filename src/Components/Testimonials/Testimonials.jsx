import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.jpg'
import back_icon from '../../assets/back-icon.jpg'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.jpg'

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
                            <img src={user_1} alt='' />
                            <div>
                                <h3>Enora Anika</h3>
                                <span>NC, USA</span>
                            </div>
                        </div>
                        <p>They have been very helpful and flexible which allow me plan my schedule. Special thanks to Zion & Yoon from their cleaner team</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_2} alt='' />
                            <div>
                                <h3>Elyo Alvis</h3>
                                <span>NC, USA</span>
                            </div>
                        </div>
                        <p>They have been very helpful and flexible which allow me plan my schedule. Special thanks to Zion & Yoon from their cleaner team</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_3} alt='' />
                            <div>
                                <h3>Alexis UWimana</h3>
                                <span>NC, USA</span>
                            </div>
                        </div>
                        <p>They have been very helpful and flexible which allow me plan my schedule. Special thanks to Zion & Yoon from their cleaner team</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4} alt='' />
                            <div>
                                <h3>Evan Niyo</h3>
                                <span>NC, USA</span>
                            </div>
                        </div>
                        <p>They have been very helpful and flexible which allow me plan my schedule. Special thanks to Zion & Yoon from their cleaner team</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials