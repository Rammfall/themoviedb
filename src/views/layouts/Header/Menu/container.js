import React from 'react'
import { connect } from 'react-redux'

import { logoutUser } from 'Store/concepts/session/actions'
import { menuPropTypes } from 'Views/layouts/Header/Menu/types'

import MenuComponent from 'Views/layouts/Header/Menu/component'

const Menu = ({ onLogout }) => (
  <MenuComponent onLogout={onLogout} />
)

Menu.propTypes = menuPropTypes

const MapDispatchToProps = {
  onLogout: logoutUser
}

export { MenuComponent }
export default connect(undefined, MapDispatchToProps)(Menu)
