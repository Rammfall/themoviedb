import { SAVE_LISTS } from './types'

/**
 * @param {{ids: number[], total: number}} state
 * @param {{ids: number[], total: number, type: string}} action
 * @returns {{total, ids}|{total: number, ids: *[]}}
 */
const lists = (state = { ids: [], total: 0 }, action) => {
  switch (action.type) {
    case SAVE_LISTS:
      return {
        ids: action.ids,
        total: action.total
      }
    default:
      return state
  }
}

export default lists
