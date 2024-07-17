"use client"
import React from 'react'
import Card from "@/app/components/Projects/card"
import {motion} from "framer-motion"

const page = () => {
    const data = [
        {
            link:'/Projects/P1',
            src:"https://www.smsfoundation.org/wp-content/uploads/2020/08/women-leadership-school-sehgal-.jpg",
            heading:"LOCAL PARTICIPATION AND SUSTAINABILITY",
            discription:"Creates awareness among the communities about the value of participation in making local institutions vibrant and improving the last mile delivery of government programs."
        },
        {
            link:'/Projects/P2',
            src:"https://images.unsplash.com/photo-1609252509229-364936a1d1a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVyYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
            heading:"OUTREACH FOR DEVELOPMENT",
            discription:"Facilitate participation and positive social change in rural communities by creating awareness and sharing knowledge."
        },
        {
            link:'/Projects/P3',
            src:"https://images.unsplash.com/photo-1518131296958-df44106fd0ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cnVyYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
            heading:"RURAL RESEARCH ",
            discription:"Maximizes the impact of poverty alleviation initiatives for rural communities through using participatory research and impact evaluation as practical tools informing action, outcomes and learning."
        }
        
    ]
  return (
    <div id='project' className='pro' >
        <div className='project_main'>
        <div className='top'>
            <motion.h1
                initial={{
                    opacity:0.5
                }}
                whileInView={{
                    opacity:2
                }}
                transition={{
                    duration:1.2
                }}
                whileHover={{
                    color:"chocolate"
                }}
            
            >Our Projects</motion.h1>
            <div className='line'></div>
        </div>
        <div className='bottom'>
            {data.map((e)=>{
                return(
                    <Card src = {e.src}  heading = {e.heading} discription = {e.discription} link={e.link} />
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default page