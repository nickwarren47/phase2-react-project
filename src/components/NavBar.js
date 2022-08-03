import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function NavBar(){
    const [activeItem, setActiveItem] = useState("Home")
    return (
        <Menu>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={() => setActiveItem("Home")}>
            <Link to="/Home">Home</Link>
          </Menu.Item>
          <Menu.Item
            name='MacOS'
            active={activeItem === 'MacOS'}
            onClick={() => setActiveItem("MacOS")}>
            <Link to="/MacOS">MacOS</Link>
          </Menu.Item>
          <Menu.Item
            name='Windows'
            active={activeItem === 'Windows'}
            onClick={() => setActiveItem("Windows")}>
            <Link to="/Windows">Windows</Link>
          </Menu.Item>
          <Menu.Item
            name='Linux'
            active={activeItem === 'Linux'}
            onClick={() => setActiveItem("Linux")}>
            <Link to="/Linux">Linux</Link>
          </Menu.Item>
          <Menu.Item
            name='Snippets'
            active={activeItem === 'Snippets'}
            onClick={() => setActiveItem("Snippets")}>
            <Link to="/Snippets">Snippets</Link>
          </Menu.Item>
        </Menu>
    )
}

export default NavBar;