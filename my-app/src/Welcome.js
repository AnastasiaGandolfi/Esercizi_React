import React from 'react'

export default function Welcome({name= 'World'}) {
  return (
    <div>
        <h1>Welcome, {name}!</h1>
    </div>
  )
}