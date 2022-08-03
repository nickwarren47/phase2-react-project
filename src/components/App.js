import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Windows from "./Windows";
import Linux from "./Linux";
import MacOS from './MacOS';
import {Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [shortCuts, setAllShortCuts] = useState([])
  const [snippets, setSnippets] = useState([])

useEffect(() => {
    fetch('http://localhost:5000/arrayOfShortCuts')
    .then(res => res.json())
    .then((shortCuts) => setAllShortCuts(shortCuts))
}, [])
  
useEffect(() => {
    fetch('http://localhost:5000/arrayOfSnippets')
    .then(res => res.json())
    .then((snippets) => setSnippets(snippets))
}, [])
 
// shortCuts.worksIn === "MacOS"
  const macsArray = shortCuts.filter((shortCut) => shortCut.worksIn === "MacOS")
  const windowsArray = shortCuts.filter((shortCut) => shortCut.worksIn === "Windows")
  const linuxArray = shortCuts.filter((shortCut) => shortCut.worksIn === "Linux")

  return (
    <div className="App">
        
        <Header />
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/MacOS">
              {macsArray.map((mac) => (
              <MacOS mac={mac}/>))}
            </Route>
            <Route path="/Windows">
            {windowsArray.map((window) => (
              <Windows window={window}/>))}
            </Route>
            <Route path="/Linux">
              {linuxArray.map((linux) => (
              <Linux linux={linux}/>))}
            </Route>
          </Switch>
    </div>
  );
}

export default App;
