import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function Header(){
    return(
        <header>
            <h1>
                Coder's Keys 
                <span className="logo" role="img">
                    💻
                </span>
            </h1>
            <NavLink
                to="/MacOS"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            >
                MacOS
            </NavLink>
            <NavLink
                to="/Windows"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            >
                Windows
            </NavLink>
            <NavLink
                to="/Linux"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            >
                Linux
            </NavLink>
        </header>
    );
}

export default Header;