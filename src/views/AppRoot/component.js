import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Route from 'Views/AppRoot/components/Route'

import LoginScreen from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const AppRootComponent = () => (
  <BrowserRouter>
    <Route
      path="/login"
      component={LoginScreen}
    />
    <Route
      path="/"
      privateRoute
      component={Dashboard}
    />
  </BrowserRouter>
)

export default AppRootComponent
