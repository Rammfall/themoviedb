import { combineReducers } from 'redux'

import {
  SAVE_DASHBOARD_MOVIES,
  SAVE_DASHBOARD_TOTAL
} from './types'

const dashboardIds = (state = [], action) => {
  switch (action.type) {
    case SAVE_DASHBOARD_MOVIES:
      return action.ids
    default:
      return state
  }
}

const dashboardTotal = (state = null, action) => {
  switch (action.type) {
    case SAVE_DASHBOARD_TOTAL:
      return action.total
    default:
      return state
  }
}

export default combineReducers({
  dashboardIds,
  dashboardTotal
})
