import React from 'react'
import Search from './Search'
import ToggleKeys from './ToggleKeys'
import FilterCategory from './FilterCategory'
import ItemForm from './ItemForm'

function SubHeader({handleSearchQuery, onCategoryChange}) {
  return (
    <div>
        <Search handleSearchQuery={handleSearchQuery}/>
        <ToggleKeys />
        <FilterCategory onCategoryChange={onCategoryChange}/>
        <ItemForm />
    </div>
  )
}

export default SubHeader