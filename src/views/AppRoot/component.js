import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import LoginScreen from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const AppRoot = ({ isLogged }) => (
  <BrowserRouter>
    <Route
      path="/login"
      component={LoginScreen}
    />
    <Route
      path="/"
      component={Dashboard}
    >
      {!isLogged && <Redirect to="/login" />}
    </Route>
  </BrowserRouter>
)

AppRoot.propTypes = {
  isLogged: PropTypes.bool
}
AppRoot.defaultProps = {
  isLogged: false
}

export default AppRoot
