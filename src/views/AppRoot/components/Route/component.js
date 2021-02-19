import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { propTypes, defaultProps } from './types'

const RouteComponent = ({
  component: Component,
  conditionRender,
  exact,
  path,
  redirectTo
}) => (
  <Route
    exact={exact}
    path={path}
  >
    {conditionRender ? <Component /> : <Redirect to={redirectTo} />}
  </Route>
)

RouteComponent.propTypes = {
  ...propTypes,
  redirectTo: PropTypes.string.isRequired
}

RouteComponent.defaultProps = {
  ...defaultProps
}

export default RouteComponent
