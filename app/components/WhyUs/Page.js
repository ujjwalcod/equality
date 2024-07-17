"use client"
import React from 'react'
import {motion} from 'framer-motion'

const Page = () => {
  return (
    <div className='whyus'>
        <div className='whyus_container'>
            <motion.h1 className='whyus_container'
            
              
              initial={{
                opacity:0,
                y:"-100px"
              }}

              whileInView={{
                opacity:1,
                y:"0px"
              }}

              transition={{
                duration:2
              }}

              
            >
                WHY US ? 
            </motion.h1>
            <motion.h3 className='whyus_h1'
              initial={{
                opacity:0,
                y:"100px"
              }}

              whileInView={{
                opacity:1,
                y:"0px"
              }}
              
              transition={{
                duration:1
              }}
            >
            Equality Foundation is a non-profit NGO that bridges the gap between rural and urban India through impactful donations and initiatives. We believe in empowering communities, fostering inclusivity, and creating a brighter future for all.
            </motion.h3>
        </div>
        <div className='bg-image'>
          
        </div>
    </div>
  )
}

export default Page