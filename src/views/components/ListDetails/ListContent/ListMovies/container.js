import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { DeleteOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

import MoviesList from 'Views/components/MoviesList'
import { getListDetailsMoviesSelector } from 'Store/concepts/listDetails/selectors'
import onConfirm from 'Utils/components/modalsHandlers/onConfirm'
import { deleteListMovie } from 'Store/concepts/listDetails/actions'

class ListMovies extends Component {
  handleRemoveFromList = (id) => () => {
    const { intl: { formatMessage } } = this.props

    Modal.confirm({
      title: formatMessage({ id: 'lists.delete.movie' }),
      onOk: onConfirm(id, this.deleteHandler)
    })
  }

  actions = (id) => [
    <DeleteOutlined
      key="delete"
      onClick={this.handleRemoveFromList(id)}
    />
  ]

  deleteHandler = ({ id }) => {
    const { match: { params: { id: listId } }, deleteMovieFromList } = this.props

    return deleteMovieFromList({ listId, id })
  }

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

ListMovies.propTypes = {
  total: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  deleteMovieFromList: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

const mapStateToProps = (state, { match: { params: { id } } }) => {
  const { movies, total } = getListDetailsMoviesSelector(state, id)

  return {
    total,
    movies
  }
}

const mapDispatchToProps = {
  deleteMovieFromList: deleteListMovie
}

export { ListMovies as ListMoviesContainer }
export default compose(
  injectIntl,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ListMovies)
