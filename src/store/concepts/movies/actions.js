import {
  SAVE_TRENDING_IDS,
  GET_TRENDING,
  SAVE_TRENDING_QUANTITY,
  SEARCH,
  SAVE_FOUNDED_IDS,
  SAVE_FOUNDED_QUANTITY
} from './types'

export const getTrendingMovies = (page = 1) => ({
  type: GET_TRENDING,
  page
})

export const saveTrendingMoviesIds = ({ moviesIds }) => ({
  type: SAVE_TRENDING_IDS,
  moviesIds
})

export const saveTrendingQuantity = ({ quantity }) => ({
  type: SAVE_TRENDING_QUANTITY,
  quantity
})

export const search = (page = 1, query) => ({
  type: SEARCH,
  page,
  query
})

export const saveFoundedIds = ({ moviesIds }) => ({
  type: SAVE_FOUNDED_IDS,
  moviesIds
})

export const saveFoundedQuantity = ({ quantity }) => ({
  type: SAVE_FOUNDED_QUANTITY,
  quantity
})
