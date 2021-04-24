import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import { injectIntl } from 'react-intl'
import { compose } from 'ramda'

import onConfirm from 'Utils/components/modalsHandlers/onConfirm'
import { getListsSelector } from 'Store/concepts/lists/selectors'
import { deleteList } from 'Store/concepts/lists/actions'

import ListsListsComponent from './component'

class ListsLists extends Component {
  onDeleteModal = (id) => {
    const { onDelete, intl: { formatMessage } } = this.props

    Modal.confirm({
      title: formatMessage({ id: 'lists.delete.title' }),
      onOk: onConfirm(id, onDelete)
    })
  }

  render() {
    const { total, lists } = this.props

    return (
      <ListsListsComponent
        total={total}
        lists={lists}
        onDelete={this.onDeleteModal}
      />
    )
  }
}

ListsLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number
  })).isRequired,
  total: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

ListsLists.defaultProps = {
  total: null
}

const mapStateToProps = (state) => ({
  total: getListsSelector(state).total,
  lists: getListsSelector(state).lists
})

const mapDispatchToProps = {
  onDelete: deleteList
}

export { ListsLists as ListsListsContainer }
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
)(ListsLists)
