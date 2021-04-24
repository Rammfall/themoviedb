import { createSelector } from 'reselect'

import { idsSelector, moviesSelector, shapeSelector, totalSelector } from 'Store/selectors'
import { MOVIES, WATCHLIST } from 'Constants/concepts'

/**
 * @returns {{movies: Object[], total: number, isEmpty: boolean}}
 */
export const getWatchlistMoviesSelector = createSelector(
  moviesSelector,
  idsSelector(WATCHLIST),
  totalSelector(WATCHLIST),
  shapeSelector(MOVIES)
)
