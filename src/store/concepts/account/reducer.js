import { combineReducers } from 'redux'

import { SET_USERNAME } from './types'

const username = (state = null, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.username
    default:
      return state
  }
}

export default combineReducers({ username })
