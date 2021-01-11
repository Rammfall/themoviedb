import { combineReducers } from 'redux'

import storage from 'Modules/storage'
import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from './types'

const isLoggedIn = (state = !!storage.session.get(), action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return true
    case USER_LOGOUT_SUCCESS:
      return false
    default:
      return state
  }
}

export default combineReducers({ isLoggedIn })
