import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MoviesList from 'Views/components/MoviesList'
import { getDashboardMoviesSelector } from 'Store/concepts/dashboard/selectors'

const DashboardMovies = ({ movies, total }) => (
  <MoviesList
    movies={movies}
    total={total}
  />
)

DashboardMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    original_title: PropTypes.string,
    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string
  })).isRequired,
  total: PropTypes.number
}

DashboardMovies.defaultProps = {
  total: null
}

const mapStateToProps = (state) => ({
  movies: getDashboardMoviesSelector(state).movies,
  total: getDashboardMoviesSelector(state).total
})

export { DashboardMovies as DashboardMoviesContainer }
export default connect(mapStateToProps)(DashboardMovies)
