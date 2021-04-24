import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import MoviesList from 'Views/components/MoviesList'
import { getListDetailsMoviesSelector } from 'Store/concepts/listDetails/selectors'

const ListMovies = ({ total, movies }) => (
  <MoviesList
    movies={movies}
    total={total}
  />
)

ListMovies.propTypes = {
  total: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

const mapStateToProps = (state, { match: { params: { id } } }) => {
  const { movies, total } = getListDetailsMoviesSelector(state, id)

  return {
    total,
    movies
  }
}

export { ListMovies as ListMoviesContainer }
export default compose(
  withRouter,
  connect(mapStateToProps)
)(ListMovies)
