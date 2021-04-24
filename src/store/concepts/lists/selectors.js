import { createSelector } from 'reselect'

import { idsSelector, shapeSelector, totalSelector } from 'Store/selectors'
import { LISTS } from 'Constants/concepts'

const dataSelector = (state) => state.data.lists

/**
 * @returns {{isEmpty: boolean, lists: Array[], total: number}}
 */
export const getListsSelector = createSelector(
  dataSelector,
  idsSelector(LISTS),
  totalSelector(LISTS),
  shapeSelector(LISTS)
)
