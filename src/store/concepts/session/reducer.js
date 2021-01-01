import { combineReducers } from 'redux'

import { USER_LOGIN_SUCCESS } from './types'

const isLogged = (state = false, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return true
    default:
      return state
  }
}

export default combineReducers({ isLogged })
