import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, 
document.getElementById("root"));
