import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { isLoggedInSelector } from 'Store/concepts/session/selectors'

import { defaultProps, propTypes } from './types'

import RouteComponent from './component'

class Route extends Component {
  get redirectTo() {
    const { privateRoute } = this.props

    return privateRoute ? '/login' : '/'
  }

  get isAccessAllowed() {
    const { privateRoute, isLoggedIn } = this.props

    return privateRoute ? isLoggedIn : !isLoggedIn
  }

  render() {
    const { exact, component, path } = this.props

    return (
      <RouteComponent
        exact={exact}
        path={path}
        component={component}
        redirectTo={this.redirectTo}
        isAccessAllowed={this.isAccessAllowed}
      />
    )
  }
}

Route.propTypes = {
  ...propTypes,
  privateRoute: PropTypes.bool,
  isLoggedIn: PropTypes.bool.isRequired
}

Route.defaultProps = {
  ...defaultProps,
  privateRoute: false
}

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedInSelector(state)
})

export { Route as RouteContainer }
export default connect(mapStateToProps)(Route)
