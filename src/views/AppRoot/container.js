import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { isLoggedInSelector } from 'Store/concepts/session/selectors'

import AppRootComponent from './component'

const AppRoot = ({ isLoggedIn }) => <AppRootComponent isLoggedIn={isLoggedIn} />

AppRoot.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedInSelector(state)
})

export { AppRoot as AppRootContainer }
export default connect(mapStateToProps)(AppRoot)
