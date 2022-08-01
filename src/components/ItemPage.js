import React, { useEffect, useState } from "react";
import ItemCollection from "./ItemCollection";
import ItemForm from "./ItemForm";
import Search from "./Search";

function ItemPage() {
  const [shortCuts, setAllShortCuts] = useState([])
  const [snippets, setSnippets] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

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

  const shortCutsToDisplay = shortCuts.filter((shortCut) => shortCut.action.toLowerCase().includes(searchQuery.toLowerCase()))
 
  function handleSearchQuery(e){
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <h1>Item Searcher</h1>
      <br />
      <ItemForm />
      <br />
      <Search handleSearchQuery={handleSearchQuery}/>
      <br />
      <ItemCollection snippets={snippets} shortCuts={shortCutsToDisplay} 
      />
    </>
  );
}

export default ItemPage;
