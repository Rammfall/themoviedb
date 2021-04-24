import { createSelector } from 'reselect'

import { idsSelector, moviesSelector, shapeSelector, totalSelector } from 'Store/selectors'
import { DASHBOARD, MOVIES } from 'Constants/concepts'

/**
 * @returns {{movies: Object[], total: number, isEmpty: boolean}}
 */
export const getDashboardMoviesSelector = createSelector(
  moviesSelector,
  idsSelector(DASHBOARD),
  totalSelector(DASHBOARD),
  shapeSelector(MOVIES)
)
