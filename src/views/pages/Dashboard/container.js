import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { compose } from 'ramda'

import { getTrendingMovies, search as searchMoviesAction } from 'Store/concepts/movies/actions'
import { isEmptyDashboardSelector } from 'Store/concepts/movies/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { dashboardConstant } from 'Constants/concepts'

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
      searchMovies(decodeURIComponent(searchQuery))
    } else {
      getMovies(this.currentPage)
    }
  }

  render() {
    const { isLoading, isEmpty } = this.props

    return (
      <MoviesPage
        isLoading={isLoading}
        isEmpty={isEmpty}
      />
    )
  }
}

DashboardPage.propTypes = {
  getMovies: PropTypes.func.isRequired,
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
  isLoading: loadingSelector(state, dashboardConstant),
  isEmpty: isEmptyDashboardSelector(state)
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
