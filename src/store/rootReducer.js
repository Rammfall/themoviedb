import { combineReducers } from 'redux'

import data from 'Store/concepts/data/reducer'
import session from 'Store/concepts/session/reducer'
import account from 'Store/concepts/account/reducer'
import lists from 'Store/concepts/lists/reducer'
import dashboard from 'Store/concepts/dashboard/reducer'
import router from 'Store/concepts/router/reducer'
import watchlist from 'Store/concepts/watchlist/reducer'
import favorites from 'Store/concepts/favorites/reducer'

import { RESET_STORE } from './types'

const reducers = combineReducers({
  data,
  session,
  account,
  dashboard,
  lists,
  router,
  watchlist,
  favorites
})

export default (state, action) => {
  switch (action.type) {
    case RESET_STORE:
      return reducers(undefined, action)
    default:
      return reducers(state, action)
  }
}
