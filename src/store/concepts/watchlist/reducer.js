import { SAVE_WATCHLIST_MOVIES } from './types'

/**
 * @param {{total: number, ids: number[]}} state
 * @param {{total: number, ids: number[], type: string}} action
 * @returns {{total: number, ids: number[]}}
 */
const watchlist = (state = { total: 0, ids: [] }, action) => {
  switch (action.type) {
    case SAVE_WATCHLIST_MOVIES:
      return {
        total: action.total,
        ids: action.ids
      }
    default:
      return state
  }
}

export default watchlist
