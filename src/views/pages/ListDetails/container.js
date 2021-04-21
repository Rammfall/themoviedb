import React, { Component } from 'react'
import { compose } from 'ramda'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import ListDetails from 'Views/components/ListDetails'
import { getListMoviesSelector } from 'Store/concepts/movies/selectors'
import { getListMovies } from 'Store/concepts/movies/actions'
import { loadingSelector } from 'Store/concepts/data/selectors'
import apiRoutes from 'Constants/ApiRoutes'
import { getListDetails } from 'Store/concepts/lists/selectors'

class ListDetailsPage extends Component {
  componentDidMount() {
    const { getMovies, match: { params: { id } } } = this.props

    getMovies({ id })
  }

  render() {
    const { title, match: { params: { id } }, isLoading, movies: { isEmpty }, intl: { formatMessage } } = this.props

    return(
      <ListDetails
        isLoading={isLoading}
        isEmpty={isEmpty}
        titleEmpty={formatMessage({ id: 'movies.empty' })}
        title={title}
      />
    )
  }
}

ListDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  movies: getListMoviesSelector(state, id),
  isLoading: loadingSelector(state, apiRoutes.movies.list.get(id)),
  title: getListDetails(state, id).name
})

const mapDispatchToProps = {
  getMovies: getListMovies
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
)(ListDetailsPage)
