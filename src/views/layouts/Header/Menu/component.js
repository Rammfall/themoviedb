import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { menuPropTypes } from 'Views/layouts/Header/Menu/types'

const MenuComponent = ({ onLogout }) => (
  <Menu>
    <Menu.Item>
      <Link to='/'>Dashboard</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to='/lists'>My Lists</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/watchlist'>Watchlist</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/favorites'>Favorites</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={onLogout}>Logout</Menu.Item>
  </Menu>
)

MenuComponent.propTypes = menuPropTypes

export default MenuComponent
