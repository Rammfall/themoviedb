import { combineReducers } from 'redux'

import session from 'Store/concepts/session/reducer'
import account from 'Store/concepts/account/reducer'
import { RESET_STORE } from 'Store/types'

const reducers = combineReducers({
  session,
  account
})

export default (state, action) => {
  switch (action.type) {
    case RESET_STORE:
      return reducers(undefined, action)
    default:
      return reducers(state, action)
  }
}
