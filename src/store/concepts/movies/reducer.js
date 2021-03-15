import { combineReducers } from 'redux'

import { SAVE_FOUNDED_IDS, SAVE_FOUNDED_QUANTITY, SAVE_TRENDING_IDS, SAVE_TRENDING_QUANTITY } from './types'

const trendingMoviesIds = (state = [], action) => {
  switch (action.type) {
    case SAVE_TRENDING_IDS:
      return action.moviesIds
    default:
      return state
  }
}

const trendingQuantity = (state = null, action) => {
  switch (action.type) {
    case SAVE_TRENDING_QUANTITY:
      return action.quantity
    default:
      return state
  }
}

const foundedMoviesIds = (state = [], action) => {
  switch (action.type) {
    case SAVE_FOUNDED_IDS:
      return action.moviesIds
    default:
      return state
  }
}

const foundedQuantity = (state = null, action) => {
  switch (action.type) {
    case SAVE_FOUNDED_QUANTITY:
      return action.quantity
    default:
      return state
  }
}

const trendingMovies = combineReducers({
  moviesIds: trendingMoviesIds,
  quantity: trendingQuantity
})

const foundedMovies = combineReducers({
  moviesIds: foundedMoviesIds,
  quantity: foundedQuantity
})

export default combineReducers({
  trendingMovies,
  foundedMovies
})
