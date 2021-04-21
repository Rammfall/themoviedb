import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import ListContent from 'Views/components/ListContent'
import { getFavoritesMovies } from 'Store/concepts/movies/actions'
import { userIdSelector } from 'Store/concepts/account/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { favoritesConstant } from 'Constants/concepts'
import { getFavoritesMoviesSelector } from 'Store/concepts/movies/selectors'

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
    const { movies: { isEmpty }, isLoading, intl: { formatMessage } } = this.props

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

FavoritesPage.defaultProps = {
  isLoading: true,
  userId: null
}

const mapStateToProps = (state) => ({
  movies: getFavoritesMoviesSelector(state),
  userId: userIdSelector(state),
  isLoading: loadingSelector(state, favoritesConstant)
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
