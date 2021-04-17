import { combineReducers } from 'redux'

import {
  SAVE_LISTS_TOTAL,
  SAVE_LISTS
} from './types'

/**
 * @param {number[]} state
 * @param action
 * @param {string} action.type
 * @param {number[]} action.ids
 * @returns {*[]|*}
 */
const listsIds = (state = [], action) => {
  switch (action.type) {
    case SAVE_LISTS:
      return action.ids
    default:
      return state
  }
}

/**
 * @param {number[]} state
 * @param action
 * @param {string} action.type
 * @param {number} action.total
 * @returns {*[]|*}
 */
const listsTotal = (state = null, action) => {
  switch (action.type) {
    case SAVE_LISTS_TOTAL:
      return action.total
    default:
      return state
  }
}

export default combineReducers({
  listsIds,
  listsTotal
})
