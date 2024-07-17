"use client"
import {motion} from "framer-motion"
import React from 'react'

const info = (props) => {
  return (
    <div className='info_p1'>
        <h4>{props.logo}</h4>
        <motion.p 
          whileHover={{
            color:"chocolate",
          }}
        >{props.detail}</motion.p>
    </div>
  )
}

export default info