import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MoviesList from 'Views/components/MoviesList'
import { getWatchlistMoviesSelector } from 'Store/concepts/movies/selectors'

class WatchlistMovies extends Component {
  render() {
    const { movies: { total, movies } } = this.props

    return (
      <MoviesList
        movies={movies}
        total={total}
      />
    )
  }
}

WatchlistMovies.propTypes = {
  movies: PropTypes.shape({
    total: PropTypes.number.isRequired,
    movies: PropTypes.arrayOf().isRequired
  }).isRequired
}

const mapStateToProps = (state) => ({
  movies: getWatchlistMoviesSelector(state)
})

export { WatchlistMovies as WatchlistMoviesContainer }
export default connect(mapStateToProps)(WatchlistMovies)
