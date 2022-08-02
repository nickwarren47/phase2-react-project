import React, { useEffect, useState } from "react";
import ItemCollection from "./ItemCollection";
import SubHeader from "./SubHeader";

function ItemPage() {
  const [shortCuts, setAllShortCuts] = useState([])
  const [snippets, setSnippets] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch('http://localhost:3000/arrayOfShortCuts')
    .then(res => res.json())
    .then((shortCuts) => setAllShortCuts(shortCuts))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/arrayOfSnippets')
    .then(res => res.json())
    .then((snippets) => setSnippets(snippets))
  }, [])

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const shortCutsToDisplay = shortCuts
  .filter((shortCut) => selectedCategory === "All" || shortCut.category === selectedCategory)
  .filter((shortCut) => shortCut.action.toLowerCase().includes(searchQuery.toLowerCase()))
 
  function handleSearchQuery(event){
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <SubHeader handleSearchQuery={handleSearchQuery} onCategoryChange={handleCategoryChange}/>
      <ItemCollection snippets={snippets} shortCuts={shortCutsToDisplay} 
      />
    </div>
  );
}

export default ItemPage;
