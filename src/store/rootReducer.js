import { combineReducers } from 'redux'

import session from 'Store/concepts/session/reducer'
import account from 'Store/concepts/account/reducer'
import movies from 'Store/concepts/movies/reducer'
import data from 'Store/concepts/data/reducer'

import { RESET_STORE } from 'Store/types'

const reducers = combineReducers({
  session,
  account,
  movies,
  data
})

export default (state, action) => {
  switch (action.type) {
    case RESET_STORE:
      return reducers(undefined, action)
    default:
      return reducers(state, action)
  }
}
