import {
  GET_LIST_DETAILS,
  LOAD_LIST_DETAILS,
  DELETE_LIST_MOVIE,
  SAVE_LIST_DETAILS
} from './types'

/**
 * @param {number} id
 * @returns {{type: string, id: number}}
 */
export const getListDetails = ({ id }) => ({
  type: GET_LIST_DETAILS,
  id
})

/**
 * @param {number} id
 * @returns {{type: string, id: number}}
 */
export const loadListDetails = ({ id }) => ({
  type: LOAD_LIST_DETAILS,
  id
})

/**
 * @param {number} listId
 * @param {number[]} ids
 * @param {number} total
 * @returns {{listId: number, total: number, ids: number[], type: string}}
 */
export const saveListDetails = ({ listId, ids, total }) => ({
  listId,
  ids,
  total,
  type: SAVE_LIST_DETAILS
})

/**
 * @param {number} id
 * @returns {{id: number, type: string}}
 */
export const deleteListMovie = ({ id }) => ({
  type: DELETE_LIST_MOVIE,
  id
})
