import React from 'react'

export default function Tasks({tasks}) {
  
    console.log('aqui', tasks)
  return (
    <div> 
       {tasks.map((task)=><p>{task.title}</p>)} 
    </div>
  )
}
