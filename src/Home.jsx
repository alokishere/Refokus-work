import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work';

const Home = () => {
  return (
      <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Work/>
    </div>
  )
}

export default Home