import { combineReducers } from 'redux'

import { SAVE_TRENDING_IDS, SAVE_TRENDING_QUANTITY } from './types'

const moviesIds = (state = [], action) => {
  switch (action.type) {
    case SAVE_TRENDING_IDS:
      return action.moviesIds
    default:
      return state
  }
}

const quantity = (state = null, action) => {
  switch (action.type) {
    case SAVE_TRENDING_QUANTITY:
      return action.quantity
    default:
      return state
  }
}

const trendingMovies = combineReducers({ moviesIds, quantity })

export default combineReducers({ trendingMovies })
