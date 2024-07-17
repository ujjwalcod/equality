"use client"
import React from 'react'
import Card from '@/app/components/About/card'
import {motion} from "framer-motion"

function page() {

  const data = [
    {
      name:"Helped",
      count:250
    },
    {
      name:"Active",
      count: 100
    }
  ]
  return (
    <div className='about' id='about'>
      <div className='about_l'>
        <motion.h3
          initial={{
            scale:0,
            opacity:0
          }}

          whileInView={{
            scale:1,
            opacity:1,
          }}
        >About Us</motion.h3>


        <motion.h2  

          initial={{
            x:"50%",
          }}
          whileInView={{
            x:"0%",
          }}
          transition={{
            duration:0.4
          }}
          
        >We Connect Urban India To Rural India</motion.h2>
        <motion.p 
          initial={{
            y:"30px",
            opacity:0
          }}

          whileInView={{
            y:"0px",
            opacity:1
          }}
          whileHover={{
            color:"black"
          }}

          transition={{
            duration:1,
          }}
        >Equality Foundation: Bridging Urban Communities through Support and Generosity.</motion.p >
      </div>
      <div className='about_r'>
        <motion.h4
          whileHover={{
            color:"black"
          }}
        >At Equality Foundation, our mission is simple yet profound: to unite urban communities in a shared purpose of compassion, donation, and support. We understand the strength that lies within urban areas and aim to harness this strength for the betterment of society.</motion.h4>
        <div className='nav_r_b'>
          <div className='help'>
            {data.map((e)=>{
              return(
                <>
                  <Card name = {e.name}  count={e.count} />
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page