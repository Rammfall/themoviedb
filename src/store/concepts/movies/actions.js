import {
  GET_TRENDING,
  SEARCH,
  SAVE_DASHBOARD_TOTAL,
  SAVE_DASHBOARD_MOVIES
} from './types'

export const getTrendingMovies = (page = 1) => ({
  type: GET_TRENDING,
  page
})

export const search = (page = 1, query) => ({
  type: SEARCH,
  page,
  query
})

export const saveDashboardIds = ({ ids }) => ({
  type: SAVE_DASHBOARD_MOVIES,
  ids
})

export const saveDashboardTotal = ({ total }) => ({
  type: SAVE_DASHBOARD_TOTAL,
  total
})
