import { combineReducers } from 'redux'

import {
  SAVE_DASHBOARD_MOVIES,
  SAVE_DASHBOARD_TOTAL,
  SAVE_WATCHLIST_MOVIES,
  SAVE_FAVORITES_MOVIES
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

const watchlist = (state = { total: 0, ids: [] }, action) => {
  switch (action.type) {
    case SAVE_WATCHLIST_MOVIES:
      return {
        total: action.total,
        ids: action.ids
      }
    default:
      return state
  }
}

const favorites = (state = { total: 0, ids: [] }, action) => {
  switch (action.type) {
    case SAVE_FAVORITES_MOVIES:
      return {
        total: action.total,
        ids: action.ids
      }
    default:
      return state
  }
}

export default combineReducers({
  dashboardIds,
  dashboardTotal,
  watchlist,
  favorites
})
