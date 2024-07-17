"use client"
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap/all";

const Page = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const comp = useRef(null);

  const handleMouseMove = (event) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY,
      
    });
  };

  useEffect(() => {
    let ctx = gsap.to(".circle", {
      x: mouseCoordinates.x,
      y: mouseCoordinates.y,
      opacity:1,
      ease:"sine"
    });

    return () => ctx.kill();
  }, [mouseCoordinates]);

  return (
    <motion.div className="main" ref={comp}>
      <div className="circle"></div>

      <motion.div className="main_upper" onMouseMove={handleMouseMove}>
        <div className="gaur">
          <motion.h1
            initial={{
              opacity:0,
              x:"-200px",
              scale:0.3
            }}

            animate={{
              opacity:1,
              x:"0px",
              scale:1
            }}
            translate=""
          >Equality</motion.h1>
        </div>

        <div className="foundation">
          <motion.h1
            initial={{
              opacity:0,
              x:"-200px",
              scale:0.2
            }}

            animate={{
              opacity:1,
              x:"0px",
              scale:1
            }}

            transition={{
              delay:0.5
            }}
          >FOUNDATION</motion.h1>
        </div>

        <motion.div className="meaning"
        
        initial={{
          opacity:0,
          x:"-200px"
        }}

        animate={{
          opacity:1,
          x:"0px"
        }}
        
        transition={{
          delay:1,
        }}    

        >
          “You are one step away from helping someone in need as your waste can be someone’s dream. We accept the donation from you and supply them to needy people located in Rural India.”
        </motion.div>

        <motion.img src="/logo-removebg-preview.png" alt="Gaur's Foundation Logo" 

          initial={{
              scale:0
            }}

            animate={{
              scale:[0,1,1.1,1.1,1]
            }}

            transition={{
              delay:1,
              duration:0.7
            }}

        />
      </motion.div>
    </motion.div>
  );
};

export default Page;
