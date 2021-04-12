import { combineReducers } from 'redux'

import { SET_ID, SET_USERNAME } from './types'

const username = (state = null, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.username
    default:
      return state
  }
}

const userId = (state = null, action) => {
  switch (action.type) {
    case SET_ID:
      return action.id
    default:
      return state
  }
}

export default combineReducers({ username, userId })
