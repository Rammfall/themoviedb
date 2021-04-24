import React from 'react'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { getListDetailsMoviesSelector, getListTitleSelector } from 'Store/concepts/listDetails/selectors'

import ListContentComponent from './component'

const ListContent = ({
  title,
  isEmpty,
  intl: { formatMessage }
}) => (
  <ListContentComponent
    isEmptyTitle={formatMessage({ id: 'movies.empty' })}
    isEmpty={isEmpty}
    title={title}
  />
)

ListContent.propTypes = {
  title: PropTypes.string.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  isEmpty: PropTypes.bool.isRequired
}

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  title: getListTitleSelector(state, id),
  isEmpty: getListDetailsMoviesSelector(state, id).isEmpty
})

export { ListContent as ListContentContainer }
export default compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(ListContent)
