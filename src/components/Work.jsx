import { useMotionValueEvent, useScroll } from 'motion/react'
import React, { useState } from 'react'

const Work = () => {

const{ scrollYProgress}=  useScroll()

const [images, setimages] = useState([
    {url:"images/images Tools-1.png",top:"50%",left:"42%",isActive:false},
    {url:"images/image tool2.png",top:"53%",left:"52%",isActive:false},
    {url:"images/image tool3.png",top:"56%",left:"48%",isActive:false},
    {url:"images/image tool4.png",top:"58%",left:"60%",isActive:false},
    {url:"images/image tool5.png",top:"59%",left:"39%",isActive:false},
    {url:"images/image tool6.png",top:"62%",left:"40%",isActive:false},
    
   ])

useMotionValueEvent(scrollYProgress, "change", (latest)=>{
  function showNhideImages(arr){
    
    setimages(prev=>{
      return prev.map((item,index)=>{
        if(arr.includes(index)){
          return {...item,isActive:true}
        }else{
          return {...item,isActive:false}
        }
      })
    })
  }


 switch(Math.floor(latest*100)){
          case 0:
            showNhideImages([])
            break;
            case 1:
            showNhideImages([0])
            break;
            case 2:
            showNhideImages([0,1])
            break;
            case 3:
            showNhideImages([0,1,2])
            break;
            case 4:
            showNhideImages([0,1,2,3])
            break;
            case 5:
            showNhideImages([0,1,2,3,4])
            break;
            case 6:
            showNhideImages([0,1,2,3,4,5])
            break;
        }
})


       



  return (
    <div className='w-full  text-white mt-10'>
        <div className='relative max-w-4xl mx-auto text-center'>
            <h1 className='leading-none text-[30vw] font-medium tracking-wide select-none' >work</h1>
            <div className='absolute top-0 h-full w-full'>
                {images.map((item,index)=>{
                if(item.isActive) return <img key={index} className='absolute rounded-lg h-60 translate-x-[-50%] translate-y-[-50%]' src={item.url} style={{top:item.top,left:item.left}} alt="" />
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Work