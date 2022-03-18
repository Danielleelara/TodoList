import React from 'react'
import Tasks from './Tasks'

export default function Task({tasks}) {
  return (
    <>
        {tasks.map(task => <Tasks/> )}
    </>
  )
}

