import { createSelector } from 'reselect'
// import { c } from 'ramda'

const dataSelector = state => state.data

export const loadingSelector = createSelector(
  dataSelector,
  (_, endpoint) => endpoint,
  (data, endpoint) => data[endpoint] && data[endpoint].isLoading
)
