import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
    var data = [
        {url:'icons/awwards.svg',num:'52'},
        {url:'icons/Conf.svg',num:'11'},
        {url:'icons/CSSDesign.svg',num:'23'},
        {url:'icons/images.svg',num:'02'},
        {url:'icons/Conf.svg',num:'15'},
        {url:'icons/awwards.svg',num:'9'}
    ]
  return (
    <div className='w-full h-20 flex items-center justify-between mt-25'>
      {data.map((item)=>{
      return <Stripe url={item.url} num={item.num}/>
      })}
    </div>
  )
}

export default Stripes