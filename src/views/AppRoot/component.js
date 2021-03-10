import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Route from 'Views/AppRoot/components/Route'

import LoginPage from '../pages/Login'
import DashboardPage from '../pages/Dashboard'

const AppRootComponent = () => (
  <BrowserRouter>
    <Route
      path="/login"
      component={LoginPage}
    />
    <Route
      path="/"
      privateRoute
      component={DashboardPage}
    />
  </BrowserRouter>
)

export default AppRootComponent
