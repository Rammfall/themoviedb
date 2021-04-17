import getTrendingMoviesOperation from './trendingMovies'
import searchMoviesOperation from './searchMovies'
import getWatchlistMoviesOperation from './getWatchlistMovies'
import toggleWatchlistMovieOperation from './toggleWatchlistMovie'
import getFavoritesMoviesOperation from './getFavoritesMovies'
import toggleFavoriteMovieOperation from './toggleFavoriteMovie'
import getListMoviesOperation from './getListMovies'
import deleteListMovieOperation from './deleteListMovie'

export default [
  getTrendingMoviesOperation,
  searchMoviesOperation,
  getWatchlistMoviesOperation,
  toggleWatchlistMovieOperation,
  getFavoritesMoviesOperation,
  toggleFavoriteMovieOperation,
  getListMoviesOperation,
  deleteListMovieOperation
]
