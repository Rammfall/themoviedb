import { SAVE_TRENDING_IDS, GET_TRENDING, SAVE_TRENDING_QUANTITY } from './types'

export const getTrendingMovies = (page = 1) => ({
  type: GET_TRENDING,
  page
})

export const saveTrendingMoviesIds = ({ trendingMoviesIds }) => ({
  type: SAVE_TRENDING_IDS,
  trendingMoviesIds
})

export const saveTrendingQuantity = ({ trendingMoviesQuantity }) => ({
  type: SAVE_TRENDING_QUANTITY,
  trendingMoviesQuantity
})
