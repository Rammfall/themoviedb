import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { propTypes, defaultProps } from './types'

const RouteComponent = ({
  component: Component,
  isAccessAllowed,
  exact,
  path,
  redirectTo
}) => (
  <Route
    exact={exact}
    path={path}
  >
    {isAccessAllowed ? <Component /> : <Redirect to={redirectTo} />}
  </Route>
)

RouteComponent.propTypes = {
  ...propTypes,
  redirectTo: PropTypes.string.isRequired,
  isAccessAllowed: PropTypes.bool.isRequired
}

RouteComponent.defaultProps = defaultProps

export default RouteComponent
