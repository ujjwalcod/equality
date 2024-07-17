"use client"
import React from 'react'
import {motion} from "framer-motion"

const link = (props) => {
  return (
    <motion.div className='link_p1'>
        <motion.div 
          whileHover={{
            color:"chocolate",
          }}
        >
          <a href={props.href}>{props.name}</a>
        </motion.div>
    </motion.div>
  )
}

export default link