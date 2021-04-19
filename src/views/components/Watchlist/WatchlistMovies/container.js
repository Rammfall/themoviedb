import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'ramda'
import { injectIntl } from 'react-intl'
import { Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import MoviesList from 'Views/components/MoviesList'
import { getWatchlistMoviesSelector } from 'Store/concepts/movies/selectors'
import { toggleWatchlistMovie } from 'Store/concepts/movies/actions'
import onConfirm from 'Utils/components/modalsHandlers/onConfirm'

class WatchlistMovies extends Component {
  handleRemoveFromList = (id) => () => {
    const { intl: { formatMessage }, toggleWatchlist } = this.props

    Modal.confirm({
      title: formatMessage({ id: 'watchlist.remove.title' }),
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
    const { movies: { total, movies } } = this.props

    return (
      <MoviesList
        movies={movies}
        total={total}
        actions={this.actions}
      />
    )
  }
}

WatchlistMovies.propTypes = {
  movies: PropTypes.shape({
    total: PropTypes.number.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
      overview: PropTypes.string,
      poster_path: PropTypes.string
    })).isRequired
  }).isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  toggleWatchlist: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  movies: getWatchlistMoviesSelector(state)
})

const dispatchToProps = {
  toggleWatchlist: toggleWatchlistMovie
}

export { WatchlistMovies as WatchlistMoviesContainer }
export default compose(
  injectIntl,
  connect(mapStateToProps, dispatchToProps)
)(WatchlistMovies)
