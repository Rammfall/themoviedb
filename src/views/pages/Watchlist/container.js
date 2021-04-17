import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import ListContent from 'Views/components/ListContent'
import { getWatchlistMoviesSelector } from 'Store/concepts/movies/selectors'
import { getWatchlistMovies } from 'Store/concepts/movies/actions'
import { userIdSelector } from 'Store/concepts/account/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { watchlistConstant } from 'Constants/concepts'
import WatchlistMovies from 'Views/components/WatchlistMovies'

class WatchlistPage extends Component {
  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    const { location: { search }, userId } = this.props
    if (userId !== prevProps.userId || search !== prevProps.location.search) {
      this.getData()
    }
  }

  getData = () => {
    const { getMovies, userId } = this.props

    if (userId) {
      getMovies()
    }
  }

  render() {
    const { movies: { isEmpty }, isLoading, intl: { formatMessage } } = this.props

    return (
      <ListContent
        isEmpty={isEmpty}
        isLoading={isLoading}
        list={<WatchlistMovies />}
        titleEmptyState={formatMessage({ id: 'movies.empty' })}
        title={formatMessage({ id: 'watchlist.title' })}
      />
    )
  }
}

WatchlistPage.propTypes = {
  movies: PropTypes.shape({
    isEmpty: PropTypes.bool.isRequired
  }).isRequired,
  isLoading: PropTypes.bool,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  userId: PropTypes.number,
  getMovies: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

WatchlistPage.defaultProps = {
  isLoading: true,
  userId: null
}

const mapStateToProps = (state) => ({
  movies: getWatchlistMoviesSelector(state),
  userId: userIdSelector(state),
  isLoading: loadingSelector(state, watchlistConstant)
})

const mapDispatchToProps = {
  getMovies: getWatchlistMovies
}

export { WatchlistPage as WatchlistPageContainer }
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  injectIntl
)(WatchlistPage)
