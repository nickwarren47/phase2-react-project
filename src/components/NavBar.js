import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
<Menu className='menu'>
      <Menu.Item>
        <Link to="/">
          <Icon name="home" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/MacOS">
          <Icon name="apple" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Windows">
          <Icon name="windows" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Linux">
          <Icon name="linux" />
        </Link>
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