import { createSelector } from 'reselect'

const dataSelector = (state) => state.data.lists

const listsIdsSelector = ({ lists: { listsIds } }) => listsIds

export const getListsSelector = createSelector(
  dataSelector,
  listsIdsSelector,
  (lists, listsIds) => listsIds.map(item => lists[item])
)

export const getListsTotalSelector = ({ lists: { listsTotal } }) => listsTotal

export const isEmptyListsSelector = createSelector(
  listsIdsSelector,
  (ids) => !ids.length
)
