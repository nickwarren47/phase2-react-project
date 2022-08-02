import React from "react";
import ItemPage from "./ItemPage";
import Header from "./Header";
import Home from "./Home";
import MacOS from "./MacOS";
import {Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/MacOS">
          {/* <MacOS /> */}
          <p>test2</p>
        </Route>
        <Route path="/Windows">
          {/* <Windows /> */}
          <p>test3</p>
        </Route>
        <Route path="/Linux">
          {/* <Windows /> */}
          <p>test4</p>
        </Route>
    </Switch>
      <Header />
      <ItemPage />
    </div>
  );
}

export default App;
