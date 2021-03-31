import { createSelector } from 'reselect'
import { path } from 'ramda'

const dataSelector = state => state.data

export const loadingSelector = createSelector(
  dataSelector,
  (_, endpoint) => endpoint,
  (data, endpoint) => path([endpoint, 'isLoading'], data)
)
