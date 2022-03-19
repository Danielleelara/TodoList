import React from 'react'
import Users from './Users'

export default function Task({users}) {
  return (
    <>
        {users.map(task => <Users/> )}
    </>
  )
}

