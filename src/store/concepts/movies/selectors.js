import { createSelector } from 'reselect'

const dataSelector = (state) => state.data.movies

export const getDashboardMoviesSelector = createSelector(
  dataSelector,
  ({ movies: { dashboardIds } }) => dashboardIds,
  (movies, moviesIds) => moviesIds.map(item => movies[item])
)

export const getDashboardMoviesTotalSelector = ({ movies: { dashboardTotal } }) => dashboardTotal
