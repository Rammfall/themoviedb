import { createSelector } from 'reselect'

const dataSelector = (state) => state.data.movies

export const getTrendingMoviesSelector = createSelector(
  dataSelector,
  ({ movies: { trendingMovies: { moviesIds } } }) => moviesIds,
  (movies, moviesIds) => moviesIds.map(item => movies[item])
)

export const getTrendingMoviesQuantitySelector = ({ movies: { trendingMovies: { quantity } } }) => quantity

export const getFoundedMoviesSelector = createSelector(
  dataSelector,
  ({ movies: { foundedMovies: { moviesIds } } }) => moviesIds,
  (movies, moviesIds) => moviesIds.map(item => movies[item])
)

export const getFoundedMoviesQuantitySelector = ({ movies: { foundedMovies: { quantity } } }) => quantity
