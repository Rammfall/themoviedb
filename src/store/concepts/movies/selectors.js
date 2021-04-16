import { createSelector } from 'reselect'

const dataSelector = (state) => state.data.movies

const dashboardIdsSelector = ({ movies: { dashboardIds } }) => dashboardIds

export const getDashboardMoviesSelector = createSelector(
  dataSelector,
  dashboardIdsSelector,
  (movies, moviesIds) => moviesIds.map(item => movies[item])
)

export const getDashboardMoviesTotalSelector = ({ movies: { dashboardTotal } }) => dashboardTotal

export const isEmptySelector = createSelector(
  dashboardIdsSelector,
  (ids) => !ids.length
)
