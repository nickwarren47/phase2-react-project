import React from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function NavBar(){
    return (
<Menu>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/MacOS">MacOS</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Windows">Windows</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Linux">Linux</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Snippets">Snippets</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Form">Form</Link>
      </Menu.Item>
    </Menu>
    )
  }
export default NavBar;