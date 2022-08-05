import React from 'react'


function FilterCategory({handleCategoryChange}) {
    
  return (
  <div>
    <label>
    <select className="filter-snippet" name="filter" onChange={handleCategoryChange}>
      <option value="All">Select category</option>
      <option value="General">General</option>
      <option value="Basic Editing">Basic editing</option>
      <option value="Multi-cursor and selection">Multi-cursor and selection</option>
      <option value="Search and replace">Search and replace</option>
      <option value="Rich languages editing">Rich languages editing</option>
      <option value="Navigation">Navigation</option>
      <option value="Editor management">Editor management</option>
      <option value="File management">File management</option>
      <option value="Display">Display</option>
      <option value="Debug">Debug</option>
      <option value="Integrated Terminal">Integrated terminal</option>
    </select>
    </label>
  </div>
  )
}

export default FilterCategory