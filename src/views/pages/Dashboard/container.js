import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { compose } from 'ramda'

import { getTrendingMovies, search as searchMoviesAction } from 'Store/concepts/movies/actions'
import { getDashboardMoviesSelector, getDashboardMoviesTotalSelector } from 'Store/concepts/movies/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { dashboard } from 'Store/concepts/movies/endpoints'

import getSearchParams from 'Utils/url/getSearchParams'

import MoviesList from 'Views/components/MoviesList'

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
    const { getMovies, movies, quantity, isLoading } = this.props

    return (
      <MoviesList
        current={this.currentPage}
        movies={movies}
        quantity={quantity}
        isLoading={isLoading}
        getMovies={getMovies}
      />
    )
  }
}

DashboardPage.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  quantity: PropTypes.number,
  isLoading: PropTypes.bool,
  location: PropTypes.shape({
    search: PropTypes.string
  }).isRequired,
  searchMovies: PropTypes.func.isRequired
}

DashboardPage.defaultProps = {
  quantity: 0,
  isLoading: null
}

const mapStateToProps = (state) => ({
  movies: getDashboardMoviesSelector(state),
  quantity: getDashboardMoviesTotalSelector(state),
  isLoading: loadingSelector(state, dashboard)
})

const mapDispatchToProps = {
  getMovies: getTrendingMovies,
  searchMovies: searchMoviesAction
}

export { MoviesList }
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DashboardPage)
