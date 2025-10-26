import React from 'react'
import Navbar from '../components/Navbar'
import AItools from '../components/AItools'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonials'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AItools />
      <Testimonial />
      <Plan />
      <Footer/>
    </>
  )
}

export default Home
