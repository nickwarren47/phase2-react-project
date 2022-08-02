import React from 'react'

function FilterCategory({onCategoryChange}) {
  return (
    <div>
        <select name="filter" onChange={onCategoryChange}>
          <option>Select category</option>
          <option>General</option>
          <option>Basic editing</option>
          <option>Multi-cursor and selection</option>
          <option>Search and replace</option>
          <option>Rich languages editing</option>
          <option>Navigation</option>
          <option>Editor management</option>
          <option>File management</option>
          <option>Display</option>
          <option>Debug</option>
          <option>Integrated terminal</option>
        </select>
    </div>
  )
}

export default FilterCategory