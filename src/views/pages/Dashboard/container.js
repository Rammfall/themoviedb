import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { compose } from 'ramda'

import { getTrendingMovies } from 'Store/concepts/movies/actions'
import { getTrendingMoviesQuantitySelector, getTrendingMoviesSelector } from 'Store/concepts/movies/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { trendingMovies } from 'Store/concepts/movies/endpoints'

import getSearchParams from 'Utils/url/getSearchParams'

import MoviesList from 'Views/components/MoviesList'

class DashboardPage extends Component {
  componentDidMount() {
    const { getMovies } = this.props

    getMovies(this.currentPage)
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
  }).isRequired
}

DashboardPage.defaultProps = {
  quantity: 0,
  isLoading: null
}

const mapStateToProps = (state) => ({
  movies: getTrendingMoviesSelector(state),
  quantity: getTrendingMoviesQuantitySelector(state),
  isLoading: loadingSelector(state, trendingMovies)
})

const mapDispatchToProps = {
  getMovies: getTrendingMovies
}

export { MoviesList }
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DashboardPage)
