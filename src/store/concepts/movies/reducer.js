import { combineReducers } from 'redux'

import { SAVE_TRENDING_IDS, SAVE_TRENDING_QUANTITY } from './types'

const trendingMoviesIds = (state = [], action) => {
  switch (action.type) {
    case SAVE_TRENDING_IDS:
      return action.trendingMoviesIds
    default:
      return state
  }
}

const trendingMoviesQuantity = (state = null, action) => {
  switch (action.type) {
    case SAVE_TRENDING_QUANTITY:
      return action.trendingMoviesQuantity
    default:
      return state
  }
}

export default combineReducers({ trendingMoviesIds, trendingMoviesQuantity })
