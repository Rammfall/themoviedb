import { combineReducers } from 'redux'

import { PUSH_PAGE } from './types'

const currentPage = (state = 1, action) => {
  switch (action.type) {
    case PUSH_PAGE:
      return action.page
    default:
      return state
  }
}

export default combineReducers({ currentPage })
