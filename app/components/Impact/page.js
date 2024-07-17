"use client"
import React from 'react'
import Cards from "@/app/components/Impact/Card"
import {motion} from "framer-motion"

const page = () => {

    var data = [
        {
            id:1,
            title:"Sustainable Impact",
            detail:"Your donations go beyond just providing immediate relief. We invest in projects that create long-term change and empower communities to become self-sufficient."
        },
        {
            id:2,
            title:"Prioritize Education",
            detail:"Education is the key to breaking the cycle of poverty. We support education initiatives in rural areas, providing access to quality learning opportunities for children."
        },
        {
            id:3,
            title:"Empower Women",
            detail:"We believe in the power of women to uplift their communities. We provide skill development training, healthcare services, and microfinance opportunities to empower women and girls."
        },
        {
            id:4,
            title:"Promote Healthcare",
            detail:" We support healthcare initiatives, providing medical camps, awareness programs, and infrastructure development."
        }        
    ]

  return (
    <div className='impact_main'>
        <div className='top'>
            <motion.h1
                whileHover={{
                    color:"chocolate",
                    scale:1.1,
                }}
                transition={{
                    type:"spring"
                }}
            >Our Impact in Rural India</motion.h1>
            <motion.div className='line'
              whileHover={{
                color:"chocolate",
            }}
            ></motion.div>
        </div>
        <div className='bottom'>
            {
                data.map((e)=>{
                    return(
                        <Cards id={e.id} title={e.title} detail={e.detail} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default page   