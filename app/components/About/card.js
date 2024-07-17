import React from 'react'

const card = (e) => {
  return (
    <div className='card'>
        <div className='count'>{e.count}+</div>
        <h2>{e.name}</h2>
    </div>
  )
}

export default card