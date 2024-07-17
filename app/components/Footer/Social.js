"use client"
import React from 'react'
import {motion} from 'framer-motion'

const Social = (props) => {
  return (
    <div className='social_p1' >
        <a href={props.href} >
          <motion.h4  
            whileHover={{
              color:"chocolate",
            }}
          >{props.name} </motion.h4>
        </a>
    </div>
  )
}

export default Social