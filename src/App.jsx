import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Contacts from './Components/Contact/Contacts'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our Services' title='What we do(offer)'/>
        <Services/>
        <About/>
        <Title subTitle='OUr Main' title='Who is Service Master'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  )
}

export default App