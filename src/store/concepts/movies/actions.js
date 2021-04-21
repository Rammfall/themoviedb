import {
  GET_TRENDING,
  SEARCH,
  SAVE_DASHBOARD_TOTAL,
  SAVE_DASHBOARD_MOVIES,
  GET_WATCHLIST_MOVIES,
  SAVE_WATCHLIST_MOVIES,
  TOGGLE_WATCHLIST_MOVIE,
  GET_FAVORITES_MOVIES,
  SAVE_FAVORITES_MOVIES,
  TOGGLE_FAVORITE_MOVIE
} from './types'

export const getTrendingMovies = () => ({
  type: GET_TRENDING
})

export const search = (query) => ({
  type: SEARCH,
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

export const getWatchlistMovies = (withoutLoading = false) => ({
  type: GET_WATCHLIST_MOVIES,
  withoutLoading
})

/**
 * @param {number[]} ids
 * @param {number} total
 * @returns {{total, ids, type: string}}
 */
export const saveWatchlistMovies = ({ ids, total }) => ({
  type: SAVE_WATCHLIST_MOVIES,
  ids,
  total
})

/**
 * @param {number} id
 * @param {boolean} watchlist
 * @returns {{id: number, type: string, watchlist: boolean}}
 */
export const toggleWatchlistMovie = ({ id, watchlist = false }) => ({
  type: TOGGLE_WATCHLIST_MOVIE,
  id,
  watchlist
})

export const getFavoritesMovies = (withoutLoading = false) => ({
  type: GET_FAVORITES_MOVIES,
  withoutLoading
})

/**
 * @param {number[]} ids
 * @param {number} total
 * @returns {{total, ids, type: string}}
 */
export const saveFavoritesMovies = ({ ids, total }) => ({
  type: SAVE_FAVORITES_MOVIES,
  ids,
  total
})

/**
 * @param {number} id
 * @param {boolean} favorite
 * @returns {{id: number, type: string, favorite: boolean}}
 */
export const toggleFavoriteMovie = ({ id, favorite = false }) => ({
  type: TOGGLE_FAVORITE_MOVIE,
  id,
  favorite
})
