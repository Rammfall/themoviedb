import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Route from 'Views/AppRoot/components/Route'

import LoginPage from '../pages/Login'
import DashboardPage from '../pages/Dashboard'
import ListsPage from '../pages/Lists'

const AppRootComponent = () => (
  <BrowserRouter>
    <Route
      path="/login"
      component={LoginPage}
      exact
    />
     <Route
      path="/"
      privateRoute
      component={DashboardPage}
      exact
     />
    <Route
      path="/lists"
      privateRoute
      component={ListsPage}
      exact
    />
  </BrowserRouter>
)

export default AppRootComponent
