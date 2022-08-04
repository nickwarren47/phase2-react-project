import React, { useEffect, useState } from "react";
// import Header from "./Header";
import Home from "./Home";
import WindowsListings from "./WindowsListings"
import LinuxListings from "./LinuxListings"
import SnippetsListing from "./SnippetsListing"
import {Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ItemForm from "./ItemForm";
import Search from "./SearchBar"
import MacListings from "./MacListings"


function App() {
  const [shortCuts, setAllShortCuts] = useState([])
  const [snippets, setSnippets] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

useEffect(() => {
    fetch('http://localhost:5000/arrayOfShortCuts')
    .then(res => res.json())
    .then((shortCuts) => setAllShortCuts(shortCuts))
}, [])
  
useEffect(() => {
    fetch('http://localhost:5000/arrayOfSnippets')
    .then(res => res.json())
    .then((snippetsData) => setSnippets(snippetsData))
}, []) 

  function handleAddShortCut(newShortCut) {
    const updatedShortCutArray = [...shortCuts, newShortCut];
    setAllShortCuts(updatedShortCutArray);
  }

  function handleChange(e){
    setSearchQuery(e.target.value)
  }

  const macsArray = shortCuts.filter((shortCut) => shortCut.worksIn === "MacOS")
  const windowsArray = shortCuts.filter((shortCut) => shortCut.worksIn === "Windows")
  const linuxArray = shortCuts.filter((shortCut) => shortCut.worksIn === "Linux")

  const snippetsToDisplay = snippets.filter((snippet) => 
    snippet.action.toLowerCase().includes(searchQuery.toLowerCase()))

  console.log(windowsArray)

  const displayedMacTiles = macsArray.filter((macTile) => 
    macTile.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedWindowsTiles = windowsArray.filter((windowsTile) => 
    windowsTile.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedLinuxTiles = linuxArray.filter((linuxTile) => 
    linuxTile.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
 
  return (
    <div className="">
          <NavBar />
          <Switch>
              <Route path="/Home">
                <Home />
              </Route>
            <Route path="/MacOS">
            <Search onChange={handleChange}/>
              <MacListings macsArray={displayedMacTiles} />
            </Route>
            <Route path="/Windows">
            <Search onSearch={handleChange}/>
             <WindowsListings windowsArray={displayedWindowsTiles} />
            </Route>
            <Route path="/Linux">
            <Search onSearch={handleChange}/>
              <LinuxListings linuxArray={displayedLinuxTiles} />
            </Route>
            <Route path="/Snippets">
            <Search onSearch={handleChange}/>
              <SnippetsListing snippets={snippetsToDisplay}/>
            </Route>
            <Route path="/Form">
              <ItemForm onAddShortCut={handleAddShortCut}/>
            </Route>
          </Switch>
    </div>
  );
}






export default App;
