"use client"
import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

const card = (props) => {
  return (
    <motion.div className='projects_bottom'>
        <motion.img src={props.src}  />
        <motion.h2  
          initial={{
            opacity:0,
            y:"20px"
          }}
          whileInView={{
            opacity:1,
            y:"0px",
          }}
          transition={{
            duration:1,
            delay:0.5
          }}
          whileHover={{
            color:"chocolate"
          }}
        >{props.heading}</motion.h2>
        <motion.h3 
          initial={{
            opacity:0,
            y:"-20px"
          }}
          whileInView={{
            opacity:1,
            y:"0px",
          }}
          transition={{
            duration:0.7
          }}
          whileHover={{
            color:"black"
          }}
        >{props.discription}</motion.h3>
        <Link href={props.link}><motion.button
          whileHover={{
            background:"chocolate",
            color:"white"
          }}
        
        >Explore</motion.button></Link>
    </motion.div>
  )
}

export default card