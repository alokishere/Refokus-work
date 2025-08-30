import React from 'react'
import Home from './Home'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const scroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Home/>

    </div>
  )
}

export default App