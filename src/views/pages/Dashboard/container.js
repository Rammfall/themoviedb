import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { compose } from 'ramda'

import { getTrendingMovies, search as searchMoviesAction } from 'Store/concepts/movies/actions'
import {
  getDashboardMoviesSelector,
  isEmptySelector
} from 'Store/concepts/movies/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { dashboard } from 'Store/concepts/movies/endpoints'

import queryParams from 'Utils/router/queryParams'

import MoviesPage from 'Views/components/MoviesPage'

class DashboardPage extends Component {
  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    const { location: { search } } = this.props

    if(search !== prevProps.location.search) {
      this.getData()
    }
  }

  getData = () => {
    const { searchMovies, getMovies, location: { search } } = this.props
    const searchQuery = queryParams(search).get('search')

    if (searchQuery) {
      searchMovies(this.currentPage, searchQuery)
    } else {
      getMovies(this.currentPage)
    }
  }

  get currentPage() {
    const { location: { search } } = this.props
    const queryPage = queryParams(search).get('page')
    return queryPage ? Number(queryPage) : 1
  }

  render() {
    const { movies, isLoading, isEmpty } = this.props

    return (
      <MoviesPage
        movies={movies}
        isLoading={isLoading}
        isEmpty={isEmpty}
      />
    )
  }
}

DashboardPage.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isLoading: PropTypes.bool,
  location: PropTypes.shape({
    search: PropTypes.string
  }).isRequired,
  searchMovies: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired
}

DashboardPage.defaultProps = {
  isLoading: null
}

const mapStateToProps = (state) => ({
  movies: getDashboardMoviesSelector(state),
  isLoading: loadingSelector(state, dashboard),
  isEmpty: isEmptySelector(state)
})

const mapDispatchToProps = {
  getMovies: getTrendingMovies,
  searchMovies: searchMoviesAction
}

export { DashboardPage as DashboardPageContainer }
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DashboardPage)
