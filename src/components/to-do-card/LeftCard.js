import React from 'react'
import "./LeftCard.css"
import { useState } from 'react'

function LeftCard({todos,setTodos}) {

  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  

  return (
    <div className='card'>

      <div className="row">
        <input type="text" placeholder='Title' value={title} onChange={(event)=>setTitle(event.target.value)} />
      </div>

      <div className="row">
        <textarea name="" id="" cols="30" rows="10" placeholder='Enter the details' value={desc} onChange={(event)=>setDesc(event.target.value)}></textarea>
      </div>

      <div className="row">
        <button onClick={()=>{
          let todo ={title,desc}
          setTodos([...todos,todo])
        }} >Submit</button>
      </div>
    </div>
  )
}

export default LeftCard
