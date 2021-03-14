import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import useQuery from 'Utils/hooks/useQuery'

import { getTrendingMovies } from 'Store/concepts/movies/actions'
import { getTrendingMoviesQuantitySelector, getTrendingMoviesSelector } from 'Store/concepts/movies/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { trendingMovies } from 'Store/concepts/movies/endpoints'

import MoviesList from 'Views/components/MoviesList'

const DashboardPage = ({ getMovies, movies, quantity, isLoading }) => {
  const query = useQuery()
  let currentPage = query.get('page')
  currentPage = currentPage ? +currentPage : 1

  useEffect(() => {
    getMovies(currentPage)
  }, [])

  return (
    <MoviesList
      current={currentPage}
      movies={movies}
      quantity={quantity}
      isLoading={isLoading}
      getMovies={getMovies}
    />
  )
}

const mapStateToProps = (state) => ({
  movies: getTrendingMoviesSelector(state),
  quantity: getTrendingMoviesQuantitySelector(state),
  isLoading: loadingSelector(state, trendingMovies)
})

const mapDispatchToProps = {
  getMovies: getTrendingMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
