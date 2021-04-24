import React, { Component } from 'react'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { Modal } from 'antd'

import { getListDetailsMoviesSelector, getListTitleSelector } from 'Store/concepts/listDetails/selectors'
import onConfirm from 'Utils/components/modalsHandlers/onConfirm'
import { deleteList } from 'Store/concepts/lists/actions'

import ListContentComponent from './component'

class ListContent extends Component {
  onListDelete = () => {
    const { onListDelete, intl: { formatMessage }, match: { params: { id } } } = this.props

    Modal.confirm({
      title: formatMessage({ id: 'lists.delete.title' }),
      onOk: onConfirm(id, onListDelete)
    })
  }

  render() {
    const { title, isEmpty, intl: { formatMessage } } = this.props

    return (
      <ListContentComponent
        isEmptyTitle={formatMessage({ id: 'movies.empty' })}
        isEmpty={isEmpty}
        title={title}
        onListDelete={this.onListDelete}
      />
    )
  }
}

ListContent.propTypes = {
  title: PropTypes.string.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  isEmpty: PropTypes.bool.isRequired,
  match: PropTypes.shape( {
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  onListDelete: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  title: getListTitleSelector(state, id),
  isEmpty: getListDetailsMoviesSelector(state, id).isEmpty
})

const mapDispatchToProps = {
  onListDelete: deleteList
}

export { ListContent as ListContentContainer }
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
)(ListContent)
