import React, { useEffect, useState } from "react";
import Home from "./Home";
import Windows from "./Windows";
import Linux from "./Linux";
import MacOS from './MacOS';
import Snippets from "./Snippets";
import {Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ItemForm from "./ItemForm";
import { Search, Card } from "semantic-ui-react";


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

  const macsArray = shortCuts.filter((shortCut) => shortCut.worksIn === "MacOS")
  const windowsArray = shortCuts.filter((shortCut) => shortCut.worksIn === "Windows")
  const linuxArray = shortCuts.filter((shortCut) => shortCut.worksIn === "Linux")

  const macsArraySearched = macsArray
  .filter((mac) => mac.action.toLowerCase().includes(searchQuery.toLowerCase()))

  const snippetsToDisplay = snippets
  .filter((snippet) => snippet.action.toLowerCase().includes(searchQuery.toLowerCase()))

  function handleSearchQuery(event){
    console.log(event.target.value)
  }
 
  return (
    <div className="">
        {/* <Header /> */}
          <NavBar />
          <Switch>
              <Route path="/Home">
                <Home />
              </Route>
            <Route path="/MacOS">
              <Card.Group itemsPerRow={4}>
                <Search onChange={handleSearchQuery}/>
                  {macsArraySearched.map((mac) => (
                  <MacOS mac={mac}/>))}
              </Card.Group>
            </Route>
            <Route path="/Windows">
              <Card.Group itemsPerRow={4}>
                <Search />
                  {windowsArray.map((window) => (
                  <Windows window={window}/>))}
              </Card.Group>
            </Route>
            <Route path="/Linux">
              <Card.Group itemsPerRow={4}>
                <Search />
                  {linuxArray.map((linux) => (
                  <Linux linux={linux}/>))}
              </Card.Group>
            </Route>
            <Route path="/Snippets">
              <Card.Group itemsPerRow={4}>
                <Search />
                  {snippetsToDisplay.map((snippet) => (
                  <Snippets snippet={snippet}/>))}
              </Card.Group>
            </Route>
            <Route path="/Form">
              <ItemForm onAddShortCut={handleAddShortCut}/>
            </Route>
          </Switch>
    </div>
  );
}






export default App;
