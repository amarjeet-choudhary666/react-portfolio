import React, { useEffect } from 'react'
import Navbar from './components/home/Navbar.jsx'
import Marquee from './components/Home/Marquee.jsx'
import About from './components/Home/About.jsx'
import Eyes from './components/Home/Eyes.jsx'
import Featured from './components/Home/Featured.jsx'
import Card from './components/Home/Card.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import MainLandingPage from './components/Home/MainLandingPage.jsx'
import Conatct from './components/Home/Conatct.jsx'


function App() {

  return (
    <div className='w-full min-h-screen bg-[#111111] '>
      <Navbar />
      <MainLandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Card />
      <Conatct />
    </div>
  )
}

export default App
