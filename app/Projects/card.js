import React from 'react'


const card = (props) => {
  return (
      <div>
        <div className='project_upper'>
          <div className='project_bottom'>
            <div className='project_part1'>
              <div className='left' >
                <h2>{props.heading1}</h2>
                <p>{props.para1}</p>
              </div>
            
              <div className='righ' style={{
                backgroundImage:`url("${props.url1}")`}}>
              </div>
            </div>
          </div>

          <div className='project_bottom' id='project_part2'>
            <div className='project_part1'>
              <div className='righ' style={{
                backgroundImage:`url("${props.url2}")`}}>
              </div>
              <div className='left' >
                <h2>{props.heading2}</h2>
                <p>{props.para2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default card