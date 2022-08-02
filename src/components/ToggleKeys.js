import React from 'react'

function ToggleKeys() {

const handleToggle = (e) => {
    console.log(e.target)
}

  return (
    <div>
        <button onClick={handleToggle}>
        Shortcuts/snippets
        </button>
    </div>
  )
}

export default ToggleKeys