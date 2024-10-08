import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/cleaning_13.jpg'
import menu_icon from '../../assets/menu-icon.jpg'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleMenuClick = () => {
    setMobileMenu(false);
  };
  return (
    <>
    <div className="contact-info">
        <p>Contact us: +1 (919) 813-9762 | munyesjeanclaude@gmail.com</p>
    </div>
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu? 'show-mobile-menu' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Who is ServiceMaster</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
    </>
  )
}

export default Navbar