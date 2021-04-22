import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import ListContent from 'Views/components/ListContent'
import { getFavoritesMovies } from 'Store/concepts/favorites/actions'
import { userIdSelector } from 'Store/concepts/account/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { FAVORITES } from 'Constants/concepts'
import { getFavoritesMoviesSelector } from 'Store/concepts/favorites/selectors'

import FavoriteMovies from 'Views/components/FavoriteMovies'

class FavoritesPage extends Component {
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
    const { isEmpty, isLoading, intl: { formatMessage } } = this.props

    return (
      <ListContent
        isEmpty={isEmpty}
        isLoading={isLoading}
        list={<FavoriteMovies />}
        title={formatMessage({ id: 'favorites.title' })}
        titleEmptyState={formatMessage({ id: 'movies.empty' })}
      />
    )
  }
}

FavoritesPage.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
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

FavoritesPage.defaultProps = {
  isLoading: true,
  userId: null
}

const mapStateToProps = (state) => ({
  isEmpty: getFavoritesMoviesSelector(state).isEmpty,
  userId: userIdSelector(state),
  isLoading: loadingSelector(state, FAVORITES)
})

const mapDispatchToProps = {
  getMovies: getFavoritesMovies
}

export { FavoritesPage as FavoritesPageContainer }
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  injectIntl
)(FavoritesPage)
