import { SAVE_TRENDING_IDS, GET_TRENDING, SAVE_TRENDING_QUANTITY } from './types'

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
