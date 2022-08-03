import React from 'react'

function Linux( {linux} ) {
  const {
    keyStroke, 
    action, 
    worksIn, 
    category
} = linux
  
  return (
    <div>
        <h1>{keyStroke}</h1>
        <p>{action}</p>
        <p>{worksIn}</p>
        <p>{category}</p>
    </div>
  )
}

export default Linux