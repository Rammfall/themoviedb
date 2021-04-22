import { createSelector } from 'reselect'

import { idsSelector, moviesSelector, shapeSelector, totalSelector } from 'Store/selectors'
import { FAVORITES, MOVIES } from 'Constants/concepts'

export const getFavoritesMoviesSelector = createSelector(
  moviesSelector,
  idsSelector(FAVORITES),
  totalSelector(FAVORITES),
  shapeSelector(MOVIES)
)
