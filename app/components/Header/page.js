"use client"

import React from 'react';
import  Link  from 'next/link';
import {motion} from "framer-motion"

const Page = () => {
  return (
    <nav>
      <div className='nav_l'>
        <img src='/white.png' 
        
        />
      </div>
      <div className='nav_r'>
        <div className='nav_r_l'>
          <Link href={`/`}><motion.div

            initial={{
            y:"-200px",
            scale:0.3
          }}

          animate={{
            y:"0px",
            scale:1
          }}
          
          transition={{
            duration:0.75,
            delay:0.25
          }}
            
          
          ><motion.div
          whileHover={{
            color:"chocolate",
          }}
          >HOME</motion.div></motion.div></Link>
          <Link href='/Aboutpage'>
            <motion.div
              initial={{
            y:"-200px",
            scale:0.3
          }}

          animate={{
            y:"0px",
            scale:1
          }}
          whileHover={{
            color:"chocolate",
          }}
          transition={{
            duration:0.75,
            delay:0.5
          }}
            ><motion.div
            whileHover={{
              color:"chocolate",
            }}
            >ABOUT</motion.div></motion.div> 
          </Link>
          <Link href='/ProjectsPage'>
            <motion.div
              initial={{
            y:"-200px",
            scale:0.3
          }}

          animate={{
            y:"0px",
            scale:1
          }}
          whileHover={{
            color:"chocolate",
          }}
          transition={{
            duration:0.75,
            delay:0.75
          }}
            ><motion.div
            whileHover={{
              color:"chocolate",
            }}
            >PROJECT</motion.div></motion.div>
          </Link>
          <Link href={`/Contact`}>
            <motion.div
              initial={{
            y:"-200px",
            scale:0.3
          }}

          animate={{
            y:"0px",
            scale:1
          }}
          whileHover={{
            color:"chocolate",
          }}
          transition={{
            duration:0.75,
            delay:1
          }}
            ><motion.div
            whileHover={{
              color:"chocolate",
            }}
            >CONTACT</motion.div></motion.div>
          </Link>
        </div>
        <Link href='/Donate'><motion.button className='nav_r_r'

          initial={{
            y:"-200px",
            scale:0.3
          }}

          animate={{
            y:"0px",
            scale:1
          }}

          transition={{
            duration:0.75,
            delay:1.5
          }}
        
        >DONATE</motion.button></Link>
      </div>
    </nav>
  );
};

export default Page;
