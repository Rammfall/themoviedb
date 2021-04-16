import { mergeDeepRight } from 'ramda'

import { API_REQUEST, API_SAVE, API_SUCCESS } from './types'

const data = (state = {}, action) => {
  switch (action.type) {
    case API_REQUEST:
      return mergeDeepRight(state, { [action.endpoint]: { isLoading: true } })
    case API_SUCCESS:
      return mergeDeepRight(state, { [action.endpoint]: { isLoading: false } })
    case API_SAVE:
      return mergeDeepRight(state, { [action.endpoint]: action.response })
    default:
      return state
  }
}

export default data
