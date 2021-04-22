import React from 'react'

import Route from 'Views/AppRoot/components/Route'

import LoginPage from '../pages/Login'
import DashboardPage from '../pages/Dashboard'
import ListsPage from '../pages/Lists'
import WatchlistPage from '../pages/Watchlist'
import FavoritesPage from '../pages/Favorites'
// import ListDetailsPage from '../pages/ListDetails'

const AppRootComponent = () => (
  <>
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
    <Route
      path="/watchlist"
      privateRoute
      component={WatchlistPage}
      exact
    />
    <Route
      path="/favorites"
      privateRoute
      component={FavoritesPage}
      exact
    />
    {/* <Route */}
    {/*  path="/lists/:id" */}
    {/*  privateRoute */}
    {/*  component={ListDetailsPage} */}
    {/*  exact */}
    {/* /> */}
  </>
)

export default AppRootComponent
