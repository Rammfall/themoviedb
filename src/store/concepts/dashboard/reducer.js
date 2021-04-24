import { SAVE_DASHBOARD_MOVIES } from './types'

/**
 * @param {{total: number, ids: number[]}} state
 * @param {{type: string, total: number, ids: number[]}} action
 * @returns {{total: number, ids: number[]}}
 */
const dashboard = (state = { total: 0, ids: [] }, action) => {
  switch (action.type) {
    case SAVE_DASHBOARD_MOVIES:
      return {
        total: action.total,
        ids: action.ids
      }
    default:
      return state
  }
}

export default dashboard
