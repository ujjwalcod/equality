import React from 'react'
import Info from '@/app/components/Footer/info'
import Link from '@/app/components/Footer/link'
import Social from '@/app/components/Footer/Social'

const page = () => {

  const data = [
    {
      logo:<img src='https://cdn-icons-png.flaticon.com/128/14306/14306931.png' />,
      detail:"94154777XX"
    },
    {
      logo:<img src='https://cdn-icons-png.flaticon.com/128/1313/1313655.png' />,
      detail:"ujjwal.mishra2022@vitsudent.ac.in"
    }
  ]


  const Nav = [
    {
      name:"Main",
      href:"#home"
    },{
      name:"About",
      href:"#about"
    },{
      name:"Projects",
      href:"#project"
    },{
      name:"Contact",
      href:"#contact"
    },
  ]

  const social = [
    {
      name:"Github",
      href:"https://github.com/ujjwalcod",
      src:"https://cdn-icons-png.flaticon.com/128/11023/11023405.png"
    },{
      name:"Instagram",
      href:"https://www.instagram.com/ujjwal_m23/",
      src:"https://cdn-icons-png.flaticon.com/128/11023/11023405.png"
    },{
      name:"LinkedIn",
      href:"https://www.linkedin.com/in/harshit-2205-gaur/",
      src:"https://cdn-icons-png.flaticon.com/128/11023/11023405.png"
    },{
      name:"Youtube",
      href:"https://www.youtube.com/channel/UC0tEujoqN892BdHyfe4ygsQ",
      src:"https://cdn-icons-png.flaticon.com/128/11023/11023405.png"
    },
  ]
  return (
    <footer>
        <div className='footer_p1'>
            <div>
              <img src= '/gaurs-foundation-high-resolution-logo-transparent.png' />
            </div>
            <div className='page'>
              <h2>Pages</h2>
              {Nav.map((e)=>{
                return <Link href={e.href} name={e.name}/>
              })}
            </div>


            <div className='info'>
              <h2>Info</h2>
              {data.map((e) => {
                return <Info logo={e.logo} detail={e.detail} />
              })}
            </div>


            <div className='links'>
              <h2>Social Links</h2>
              {
                social.map((e)=>{
                  return <Social href={e.href} name={e.name} src={e.src} />
                })
              }
            </div>
        </div>

        <div className='footer_p2'>
          <h3>  copyright © 2024 @Equality Foundation all right reserved</h3>
        </div >
    </footer>
  )
}

export default page