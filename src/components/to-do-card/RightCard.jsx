import React from 'react'
import "./RightCard.css"

function RightCard({title,desc}) {
  return (
    <div className='right-card'>
      <div className="right-row">
        <h2>{title}</h2>
        <input type="checkbox" />
      </div>
      <p>{desc} </p>
    </div>
  )
}

export default RightCard

