import React from 'react'

const Work = () => {
   var images= [
    {url:"images/images Tools-1.png",top:"50%",left:"42%",isActive:false},
    {url:"images/image tool2.png",top:"48%",left:"52%",isActive:false},
    {url:"images/image tool3.png",top:"51%",left:"48%",isActive:false},
    {url:"images/image tool4.png",top:"50%",left:"60%",isActive:false},
    {url:"images/image tool5.png",top:"54%",left:"39%",isActive:true},
    {url:"images/image tool6.png",top:"62%",left:"40%",isActive:false},
    
   ]


  return (
    <div className='w-full  text-white mt-10'>
        <div className='relative max-w-4xl mx-auto text-center'>
            <h1 className='leading-none text-[30vw] font-medium tracking-wide select-none' >work</h1>
            <div className='absolute top-0 h-full w-full'>
                {images.map((item,index)=>{
                if(item.isActive) return <img className='absolute rounded-lg h-60 translate-x-[-50%] translate-y-[-50%]' src={item.url} style={{top:item.top,left:item.left}} alt="" />
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Work