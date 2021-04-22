import {
  GET_FAVORITE_MOVIES,
  SAVE_FAVORITE_MOVIES,
  TOGGLE_FAVORITE_MOVIE,
  LOAD_FAVORITE_MOVIES
} from './types'

/**
 * @returns {{type: string}}
 */
export const getFavoritesMovies = () => ({
  type: GET_FAVORITE_MOVIES
})

/**
 * @returns {{type: string}}
 */
export const loadFavoritesMovies = () => ({
  type: LOAD_FAVORITE_MOVIES
})

/**
 * @param {number[]} ids
 * @param {number} total
 * @returns {{total, ids, type: string}}
 */
export const saveFavoritesMovies = ({ ids, total }) => ({
  type: SAVE_FAVORITE_MOVIES,
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
