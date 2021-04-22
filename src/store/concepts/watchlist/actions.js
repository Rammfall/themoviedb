import {
  GET_WATCHLIST_MOVIES,
  SAVE_WATCHLIST_MOVIES,
  TOGGLE_WATCHLIST_MOVIE,
  LOAD_WATCHLIST_MOVIES
} from './types'

/**
 * @returns {{type: string}}
 */
export const getWatchlistMovies = () => ({
  type: GET_WATCHLIST_MOVIES
})

/**
 * @returns {{type: string}}
 */
export const loadWatchlistMovies = () => ({
  type: LOAD_WATCHLIST_MOVIES
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
