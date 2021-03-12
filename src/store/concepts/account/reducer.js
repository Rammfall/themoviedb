import { combineReducers } from 'redux'

import { ACCOUNT_SET_USERNAME } from './types'

const username = (state = null, action) => {
  switch (action.type) {
    case ACCOUNT_SET_USERNAME:
      return action.username
    default:
      return state
  }
}

export default combineReducers({ username })
