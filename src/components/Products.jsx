import React from 'react'
import Product from './Product'

const Products = () => {
    const products =[
  {
    "title": "Arqitel",
    "description": "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    "btn": true,
    "case": false
  },
  {
    "title": "Cula",
    "description": "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    "btn": true,
    "case": true
  },
  {
    "title": "Layout Land",
    "description": "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
    "btn": true,
    "case": false
  },
  {
    "title": "TTR",
    "description": "We've created an interactive site using generative AI to allow users to engage with our thinking about AI, industry trends and design.",
    "btn": true,
    "case": false
  },
  {
    "title": "Maniv",
    "description": "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    "btn": true,
    "case": false
  },
  {
    "title": "Nexa",
    "description": "A sleek platform built to help startups manage their finances and visualize growth metrics with clarity.",
    "btn": true,
    "case": false
  },
  {
    "title": "Orbit",
    "description": "An immersive space exploration experience where users can interact with real-time planetary data in 3D.",
    "btn": true,
    "case": false
  },
  {
    "title": "Verdi",
    "description": "A sustainable shopping assistant that guides users toward eco-friendly products with a smooth interface.",
    "btn": true,
    "case": true
  },
  {
    "title": "Pulse",
    "description": "A dynamic dashboard designed for health startups to track, analyze, and share patient wellness insights.",
    "btn": true,
    "case": false
  }
]

  return (
    <div className='mt-20'>
        {
            products.map((item,index)=>(
                <Product key={index} products={item}/>
            ))
        }
    </div>
  )
}

export default Products