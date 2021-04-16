import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { useIntl } from 'react-intl'

import { menuPropTypes } from 'Views/layouts/Header/Menu/types'

const MenuComponent = ({ onLogout }) => {
  const { formatMessage } = useIntl()

  return (
    <Menu>
      <Menu.Item>
        <Link to='/'>{formatMessage({ id: 'menu.dashboard' })}</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to='/lists'>{formatMessage({ id: 'menu.lists' })}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/watchlist'>{formatMessage({ id: 'menu.watchlist' })}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/favorites'>{formatMessage({ id: 'menu.favorites' })}</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={onLogout}>{formatMessage({ id: 'menu.logout' })}</Menu.Item>
    </Menu>
  )
}

MenuComponent.propTypes = menuPropTypes

export default MenuComponent
