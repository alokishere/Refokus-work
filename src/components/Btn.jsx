import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'

const Btn = () => {
  return (
    <div className='w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='font-medium text-sm'> Get Started</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Btn