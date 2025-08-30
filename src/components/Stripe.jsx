import React from 'react'

const Stripe = ({url,num}) => {
  return (
    <div className='w-[16.66%] h-14 px-2 py-2 border-r-[1px] border-b-[1px] border-t-[1px] border-zinc-600 flex items-center justify-between'>
        <img src={url} alt="" />
        <span className='font-semibold' >{num}</span>
    </div>
  )
}

export default Stripe