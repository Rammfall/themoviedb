import { createSelector } from 'reselect'

import { moviesConstant } from 'Constants/concepts'

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
// Try to use createStructuredSelector and replace map to another selector

const favoritesIdsSelector = ({ movies: { favorites: { ids } } }) => ids
const favoritesTotalSelector = ({ movies: { favorites: { total } } }) => total

export const getFavoritesMoviesSelector = createSelector(
  dataSelector,
  favoritesIdsSelector,
  favoritesTotalSelector,
  (movies, ids, total) => ({ total, isEmpty: !ids.length, movies: ids.map((item) => movies[item]) })
)

const listsSelector = ({ data: { lists } }) => lists

export const getListMoviesSelector = createSelector(
  dataSelector,
  listsSelector,
  (_, id) => id,
  (movies, lists, id) => {
    const listMovies = lists[id][moviesConstant]

    return {
      total: listMovies.total,
      isEmpty: !listMovies.ids.length,
      movies: listMovies.ids.map((item) => movies[item])
    }
  }
)
