import React from 'react'
import Btn from './Btn'

const Navbar = () => {
  return (
    <div>
        <div className='max-w-4xl mx-auto p-5 border-b-1 border-zinc-700 flex items-center justify-between font-regular'>
        <img src="images/refokus logo.svg" alt="" />
        <div className='flex gap-10 ml-[-100px]'>
            {["Home","Work","Culture","","News"].map((item,index)=>{
               
                  if (item.length==0) {
                   return <span key={index} className='border-1 border-zinc-600' href="#"></span>
                }else if(item=="Work"){
                  return <a  key={index} className='text-sm flex items-center justify-center gap-1 font-thin' href="#"><span style={{boxShadow:"0 0 0.25em #00FF19"}} className='inline-block h-1 w-1 bg-green-500 rounded-full'></span> {item}</a>
                }else return <a  key={index} className='text-sm font-thin' href="#">{item}</a>
            }
            )}
        </div>
        <Btn/>
        </div>
    </div>
  )
}

export default Navbar