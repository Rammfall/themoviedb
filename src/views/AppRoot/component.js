import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import LoginScreen from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import StubsRoot from '../components/stubs/StubsRoot'

const AppRootComponent = ({ isLoggedIn }) => (
  <BrowserRouter>
    <Route
      path="/login"
      component={LoginScreen}
    />
    <Route
      path="/"
      component={Dashboard}
    />
    <Route
      path="/stubs"
      component={Dashboard}
    />
    {!isLoggedIn && <Redirect to="/login" />}
    <StubsRoot />
  </BrowserRouter>
)

AppRootComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default AppRootComponent
