"use client"
import React from 'react'
import {motion} from "framer-motion"

const Card = (props) => {
  return (
    <motion.div className={`impact_card${props.id}`}
      whileHover={{
        scale:1.05,
        
      }}
    >
        <motion.h2 className="impact_heading"
          whileHover={{
            color:"chocolate",
            fontWeight:"500"
          }}
        >{props.title}</motion.h2>
        <motion.h3 className='impact_detail'
          whileHover={{
            color:"grey",
            scale:1.1,
          }}
          transition={{
            type:"spring"
        }}
        >{props.detail}</motion.h3>
    </motion.div>
  )
}

export default Card