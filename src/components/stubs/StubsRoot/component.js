import React from 'react'
import {
  Link, Route, BrowserRouter as Router, Switch
} from 'react-router-dom'

import Login from '../Login'
import Dashboard from '../Dashboard'
import DashboardEmpty from '../DashboardEmpty'
import DashboardLoading from '../DashboardLoading'
import Movie from '../Movie'
import Lists from '../Lists'
import ListDetails from '../ListDetails'
import Watchlist from '../Watchlist'
import Favorites from '../Favorites/component'

const Links = () => (
  <React.Fragment>
    <div>
      <Link to="/stubs/login">Login</Link>
    </div>
    <div>
      <Link to="/stubs/dashboard">Dashboard with content</Link>
    </div>
    <div>
      <Link to="/stubs/dashboard-empty">Dashboard empty</Link>
    </div>
    <div>
      <Link to="/stubs/dashboard-loading">Dashboard loading</Link>
    </div>
    <div>
      <Link to="/stubs/movie">Movie</Link>
    </div>
    <div>
      <Link to="/stubs/lists">Lists</Link>
    </div>
    <div>
      <Link to="/stubs/list/details">List Details</Link>
    </div>
    <div>
      <Link to="/stubs/watchlist">Watchlist</Link>
    </div>
    <div>
      <Link to="/stubs/favorites">Favorites</Link>
    </div>
  </React.Fragment>
)

const StubsRoot = () => (
  <Router>
    <Switch>
      <Route
        path="/stubs/login"
        component={Login}
      />
      <Route
        path="/stubs/dashboard"
        component={Dashboard}
      />
      <Route
        path="/stubs/dashboard-empty"
        component={DashboardEmpty}
      />
      <Route
        path="/stubs/dashboard-loading"
        component={DashboardLoading}
      />
      <Route
        path="/stubs/movie"
        component={Movie}
      />
      <Route
        path="/stubs/lists"
        component={Lists}
      />
      <Route
        path="/stubs/list/details"
        component={ListDetails}
      />
      <Route
        path="/stubs/watchlist"
        component={Watchlist}
      />
      <Route
        path="/stubs/favorites"
        component={Favorites}
      />
      <Route component={Links} />
    </Switch>
  </Router>
)

export default StubsRoot
