import {
  GET_TRENDING,
  SEARCH,
  SAVE_DASHBOARD_MOVIES
} from './types'

/**
 * @returns {{type: string}}
 */
export const getTrendingMovies = () => ({
  type: GET_TRENDING
})

/**
 * @param {string} query
 * @returns {{query: string, type: string}}
 */
export const search = ({ query }) => ({
  type: SEARCH,
  query
})

/**
 * @param {number[]} ids
 * @param {number} total
 * @returns {{total: number, ids: number[], type: string}}
 */
export const saveDashboard = ({ ids, total }) => ({
  type: SAVE_DASHBOARD_MOVIES,
  ids,
  total
})
