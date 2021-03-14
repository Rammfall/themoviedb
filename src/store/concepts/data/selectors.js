import { createSelector } from 'reselect'

const dataSelector = state => state.data

export const loadingSelector = createSelector(
  dataSelector,
  (_, endpoint) => endpoint,
  (data, endpoint) => data[endpoint] && data[endpoint].isLoading
)
