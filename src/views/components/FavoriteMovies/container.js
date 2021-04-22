import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'ramda'
import { injectIntl } from 'react-intl'
import { Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import MoviesList from 'Views/components/MoviesList'
import { getFavoritesMoviesSelector } from 'Store/concepts/favorites/selectors'
import { toggleFavoriteMovie } from 'Store/concepts/favorites/actions'
import onConfirm from 'Utils/components/modalsHandlers/onConfirm'

class FavoriteMovies extends Component {
  handleRemoveFromList = (id) => () => {
    const { intl: { formatMessage }, toggleWatchlist } = this.props

    Modal.confirm({
      title: formatMessage({ id: 'favorites.remove.title' }),
      onOk: onConfirm(id, toggleWatchlist)
    })
  }

  actions = (id) => [
    <DeleteOutlined
      key="delete"
      onClick={this.handleRemoveFromList(id)}
    />
  ]

  render() {
    const { total, movies } = this.props

    return (
      <MoviesList
        movies={movies}
        total={total}
        actions={this.actions}
      />
    )
  }
}

FavoriteMovies.propTypes = {
  total: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string
  })).isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  toggleWatchlist: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  movies: getFavoritesMoviesSelector(state).movies,
  total: getFavoritesMoviesSelector(state).total
})

const dispatchToProps = {
  toggleWatchlist: toggleFavoriteMovie
}

export { FavoriteMovies as FavoriteMoviesContainer }
export default compose(
  injectIntl,
  connect(mapStateToProps, dispatchToProps)
)(FavoriteMovies)
