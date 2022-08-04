import React, { useEffect, useState } from "react";
import Home from "./Home";
import WindowsListings from "./WindowsListings"
import LinuxListings from "./LinuxListings"
import SnippetsListing from "./SnippetsListing"
import {Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ItemForm from "./ItemForm";
import Search from "./SearchBar"
import MacListings from "./MacListings"
import FilterCategory from "./FilterCategory";


function App() {
  const [shortCuts, setShortCuts] = useState([])
  const [snippets, setSnippets] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")


useEffect(() => {
    fetch('http://localhost:5000/arrayOfShortCuts')
    .then(res => res.json())
    .then((shortCuts) => setShortCuts(shortCuts))
}, [])
  
useEffect(() => {
    fetch('http://localhost:5000/arrayOfSnippets')
    .then(res => res.json())
    .then((snippetsData) => setSnippets(snippetsData))
}, []) 

  function handleAddShortCut(newShortCut) {
    const updatedShortCutArray = [...shortCuts, newShortCut];
    setShortCuts(updatedShortCutArray);
    console.log(updatedShortCutArray)
  }

  function handleChange(e){
    setSearchQuery(e.target.value)
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }


  const macsArray = shortCuts.filter((shortCut) => shortCut.worksIn === "MacOS")
  const windowsArray = shortCuts.filter((shortCut) => shortCut.worksIn === "Windows")
  const linuxArray = shortCuts.filter((shortCut) => shortCut.worksIn === "Linux")
  // const filteredItemsToDisplay = macsArray.filter((mac) => searchState === "All" || mac.category === searchState)


  const snippetsToDisplay = snippets.filter((snippet) => 
    snippet.action.toLowerCase().includes(searchQuery.toLowerCase()))


  const displayedMacTiles = macsArray
  .filter((mac) => selectedCategory === "All" || mac.category === selectedCategory)
  .filter((macTile) => macTile.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedWindowsTiles = windowsArray
  .filter((window) => selectedCategory === "All" || window.category === selectedCategory)
  .filter((windowsTile) => windowsTile.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedLinuxTiles = linuxArray
  .filter((linux) => selectedCategory === "All" || linux.category === selectedCategory)
  .filter((linuxTile) => linuxTile.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(displayedWindowsTiles)
 
  return (
    <div className="">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/MacOS">
            <FilterCategory handleCategoryChange={handleCategoryChange} />
            <Search onChange={handleChange}/>
              <MacListings macsArray={displayedMacTiles} />
            </Route>
            <Route path="/Windows">
            <FilterCategory handleCategoryChange={handleCategoryChange} />
            <Search onSearch={handleChange}/>
             <WindowsListings windowsArray={displayedWindowsTiles} />
            </Route>
            <Route path="/Linux">
            <FilterCategory handleCategoryChange={handleCategoryChange} />
            <Search onSearch={handleChange}/>
              <LinuxListings linuxArray={displayedLinuxTiles} />
            </Route>
            <Route path="/Snippets">
            <FilterCategory handleCategoryChange={handleCategoryChange} />
            <Search onSearch={handleChange}/>
              <SnippetsListing snippets={snippetsToDisplay}/>
            </Route>
            <Route className="form" path="/Form">
              <ItemForm onAddShortCut={handleAddShortCut}/>
            </Route>
          </Switch>
    </div>
  );
}






export default App;
