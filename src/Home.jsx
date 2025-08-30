import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquee from './components/Marquee';
import Crads from './components/Crads';
import Footer from './components/Footer';

const Home = () => {
  return (
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquee/>
      <Crads/>
      <Footer/>
    </div>
  )
}

export default Home