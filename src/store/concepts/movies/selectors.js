import { createSelector } from 'reselect'

const dataSelector = (state) => state.data.movies

export const getTrendingMoviesSelector = createSelector(
  dataSelector,
  ({ movies: { trendingMoviesIds } }) => trendingMoviesIds,
  (movies, trendingMoviesIds) => trendingMoviesIds.map(item => movies[item])
)
export const getTrendingMoviesQuantitySelector = ({ movies: { trendingMoviesQuantity } }) => trendingMoviesQuantity
