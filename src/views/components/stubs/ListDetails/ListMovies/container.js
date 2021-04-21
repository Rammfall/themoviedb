import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { withRouter } from 'react-router-dom'

import { getListMoviesSelector } from 'Store/concepts/movies/selectors'
import MoviesList from 'Views/components/MoviesList'

const ListMovies = ({ moviesList: { total, movies } }) => (
  <MoviesList
    movies={movies}
    total={total}
  />
)

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  moviesList: getListMoviesSelector(state, id)
})

export default compose(
  connect(mapStateToProps),
  withRouter
)(ListMovies)
