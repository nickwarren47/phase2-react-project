import React from 'react'

function SnippetCard({prefix, action, worksIn}) {
    // console.log(prefix)
  return (
    <div className='Card'>
        {/* <h1>{prefix}</h1> */}
        <h2>{action}</h2>
        <p>{worksIn}</p>
    </div>
  )
}

export default SnippetCard