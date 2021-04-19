import { createSelector } from 'reselect'

const dataSelector = (state) => state.data.movies

const dashboardIdsSelector = ({ movies: { dashboardIds } }) => dashboardIds

export const getDashboardMoviesSelector = createSelector(
  dataSelector,
  dashboardIdsSelector,
  (movies, moviesIds) => moviesIds.map(item => movies[item])
)

export const getDashboardMoviesTotalSelector = ({ movies: { dashboardTotal } }) => dashboardTotal

export const isEmptyDashboardSelector = createSelector(
  dashboardIdsSelector,
  (ids) => !ids.length
)

const watchlistIdsSelector = ({ movies: { watchlist: { ids } } }) => ids
const watchlistTotalSelector = ({ movies: { watchlist: { total } } }) => total

export const getWatchlistMoviesSelector = createSelector(
  dataSelector,
  watchlistIdsSelector,
  watchlistTotalSelector,
  (movies, ids, total) => ({ total, isEmpty: !ids.length, movies: ids.map((item) => movies[item]) })
)
