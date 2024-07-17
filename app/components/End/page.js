"use client"
import {motion} from "framer-motion"
import React from 'react'
import Card from "@/app/components/Footer/info"
import Cards from "@/app/components/End/card"
const page = () => {
    const data = [
        {
          logo:"https://cdn-icons-png.flaticon.com/128/953/953780.png",
          detail:"94154777XX"
        },
        {
          logo:"https://cdn-icons-png.flaticon.com/128/542/542689.png",
          detail:"ujjwal.mishra2022@vitstudent.ac.in"
        }
      ]
      const detail =[{
        logo:"https://cdn-icons-png.flaticon.com/128/3661/3661391.png",
        tag:"@ujjwalm234"
      },{
        logo:"https://cdn-icons-png.flaticon.com/128/3536/3536569.png",
        tag:"@ujjwal mishra"
      }
    ]
  return (
    <div id='contact'>
      <div className='talk_to_us'>
        <div className='talk_to_us_h1' >
          <motion.h1
            initial={{
              opacity:0,
              x:"-100px",
            }}
            whileInView={{
              opacity:1,
              x:"0px"
            }}
            transition={{
              duration:1,
            }}
            whileHover={{
              color:"black"
            }}
          >Talk To Us</motion.h1>
        </div>
        <div>
          <motion.h3 
            initial={{
              opacity:0,
              x:"-100px",
            }}
            whileInView={{
              opacity:1,
              x:"0px"
            }}
            transition={{
              duration:1,
            }}
            whileHover={{
              color:"black"
            }}
          >Contact Info</motion.h3>
          <div className='detail'>
            {data.map((e) => {
              return <Cards src={e.logo} detail={e.detail} />
            })}
          </div>
        </div>
        <div className='social_links'>
          <motion.h3
            initial={{
              opacity:0,
              x:"-100px",
            }}
            whileInView={{
              opacity:1,
              x:"0px"
            }}
            transition={{
              duration:1,
            }}  
            whileHover={{
              color:"black"
            }}
          >Social Media</motion.h3>
          <div className='detail' >
            {detail.map((e)=>{
              return <Cards src={e.logo} detail={e.tag} />
            })}
          </div>
        </div>
      </div>

      <div className='location'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0566026142096!2d79.1558678!3d12.968229899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47e799e239f3%3A0x5c50fad394e65181!2sVIT%20MAIN%20GATE!5e0!3m2!1sen!2sin!4v1705612919913!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form>
          <input type='text' placeholder='Enter Your Name'className='input' />
          <input type='text' placeholder='abcs@gmail.com' className='input'/>
          <input type='text' placeholder='Enter Your Message' className='input'/>
          <motion.button 
            whileHover={{
              color:"chocolate",
              backgroundColor:"white"
            }}
          >Submit</motion.button>
        </form>
      </div>
    </div>
  )
}

export default page