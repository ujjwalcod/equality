"use client"
import React from 'react'
import {motion} from 'framer-motion'

const card = (props) => {
    return (
        <div className='end_p1'>
            <motion.img src={`${props.src}`} 
            
            initial={{
                opacity:0,
                y:"100px",
              }}
              whileInView={{
                opacity:1,
                y:"0px"
              }}
              transition={{
                duration:1,
              }}
              whileHover={{
                color:"chocolate"
              }}
            
            
            />
            <motion.p
                initial={{
                    opacity:0,
                    x:"200px",
                  }}
                  whileInView={{
                    opacity:1,
                    x:"0px"
                  }}
                  transition={{
                    duration:1,
                  }}
                  whileHover={{
                    color:"chocolate"
                  }}
            >{props.detail}</motion.p>
        </div>
    )
}

export default card