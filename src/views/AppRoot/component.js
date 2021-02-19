import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import CustomRoute from 'Views/AppRoot/components/Route'

import LoginScreen from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import StubsRoot from '../components/stubs/StubsRoot'

const AppRootComponent = () => (
  <BrowserRouter>
    <CustomRoute
      path="/login"
      component={LoginScreen}
    />
    <CustomRoute
      path="/"
      privateRoute
      component={Dashboard}
    />
    <Route
      path="/stubs"
      component={Dashboard}
    />
    <StubsRoot />
  </BrowserRouter>
)

export default AppRootComponent
