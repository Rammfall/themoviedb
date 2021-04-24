import { mergeDeepRight } from 'ramda'

import { SAVE_LIST_DETAILS } from './types'

/**
 * @param {Object} state
 * @param {string} type
 * @param {number} listId
 * @param {number[]} ids
 * @param {number} total
 * @returns {{Object}}
 */
const listDetails = (state = {}, { type, listId, ids, total }) => {
  switch (type) {
    case SAVE_LIST_DETAILS:
      return mergeDeepRight(state, { [listId]: { ids, total } })
    default:
      return state
  }
}

export default listDetails
