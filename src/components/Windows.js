import React from 'react'

function Windows({window}) {
  const {
    keyStroke, 
    action, 
    worksIn, 
    category
} = window

  return (
    <div>
        <h1>{keyStroke}</h1>
        <p>{action}</p>
        <p>{worksIn}</p>
        <p>{category}</p>
    </div>
  )
}

export default Windows