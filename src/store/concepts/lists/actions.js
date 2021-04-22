import { makeSubmitAction } from 'Store/actionFactories/makeSubmitAction'

import {
  SAVE_LISTS,
  GET_LISTS,
  ADD_LIST,
  LOAD_LISTS,
  DELETE_LIST
} from './types'

/**
 * @returns {{type: string}}
 */
export const loadLists = () => ({
  type: LOAD_LISTS
})

/**
 * @returns {{type: string}}
 */
export const getLists = () => ({
  type: GET_LISTS
})

/**
 * @param {number[]} ids
 * @param {number} total
 * @returns {{total: number, ids: number[], type: string}}
 */
export const saveLists = ({ ids, total }) => ({
  type: SAVE_LISTS,
  ids,
  total
})

export const addList = makeSubmitAction(ADD_LIST)

/**
 * @param {number} id
 * @returns {{id: number, type: string}}
 */
export const deleteList = ({ id }) => ({
  type: DELETE_LIST,
  id
})
