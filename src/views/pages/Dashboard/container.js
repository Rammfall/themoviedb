import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { compose } from 'ramda'

import { getTrendingMovies, search as searchMoviesAction } from 'Store/concepts/movies/actions'
import {
  getDashboardMoviesSelector,
  getDashboardMoviesTotalSelector,
  isEmptySelector
} from 'Store/concepts/movies/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { dashboard } from 'Store/concepts/movies/endpoints'

import getSearchParams from 'Utils/url/getSearchParams'

import MoviesPage from 'Views/components/MoviesPage'

class DashboardPage extends Component {
  componentDidMount() {
    const { searchMovies, getMovies, location: { search } } = this.props
    const searchQuery = getSearchParams(search).get('search')

    if (searchQuery) {
      searchMovies(this.currentPage, searchQuery)
    } else {
      getMovies(this.currentPage)
    }
  }

  get currentPage() {
    const { location: { search } } = this.props
    const queryPage = getSearchParams(search).get('page')
    return queryPage ? Number(queryPage) : 1
  }

  render() {
    const { getMovies, movies, total, isLoading, isEmpty } = this.props

    return (
      <MoviesPage
        current={this.currentPage}
        movies={movies}
        total={total}
        isLoading={isLoading}
        getMovies={getMovies}
        isEmpty={isEmpty}
      />
    )
  }
}

DashboardPage.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  total: PropTypes.number,
  isLoading: PropTypes.bool,
  location: PropTypes.shape({
    search: PropTypes.string
  }).isRequired,
  searchMovies: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired
}

DashboardPage.defaultProps = {
  total: 0,
  isLoading: null
}

const mapStateToProps = (state) => ({
  movies: getDashboardMoviesSelector(state),
  total: getDashboardMoviesTotalSelector(state),
  isLoading: loadingSelector(state, dashboard),
  isEmpty: isEmptySelector(state)
})

const mapDispatchToProps = {
  getMovies: getTrendingMovies,
  searchMovies: searchMoviesAction
}

export { MoviesPage }
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DashboardPage)
