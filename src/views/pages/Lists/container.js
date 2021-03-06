import React, { Component } from 'react'
import { compose } from 'ramda'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getListsSelector } from 'Store/concepts/lists/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { getLists } from 'Store/concepts/lists/actions'
import { userIdSelector } from 'Store/concepts/account/selectors'
import { LISTS } from 'Constants/concepts'

import Lists from 'Views/components/Lists'

class ListsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isCreateModalVisible: false
    }
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    const { userId, location: { search } } = this.props

    if (userId !== prevProps.userId || search !== prevProps.location.search) {
      this.getData()
    }
  }

  getData = () => {
    const { getAllLists, userId } = this.props

    if (userId) {
      getAllLists()
    }
  }

  toggleCreateModal = () => {
    this.setState(({ isCreateModalVisible }) => ({
      isCreateModalVisible: !isCreateModalVisible
    }))
  }

  render() {
    const { isEmpty, isLoading } = this.props
    const { isCreateModalVisible } = this.state

    return (
      <Lists
        isEmpty={isEmpty}
        isLoading={isLoading}
        toggleCreateModal={this.toggleCreateModal}
        isCreateModalVisible={isCreateModalVisible}
      />
    )
  }
}

ListsPage.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  userId: PropTypes.number,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  getAllLists: PropTypes.func.isRequired
}

ListsPage.defaultProps = {
  isLoading: true,
  userId: null
}

const mapStateToProps = (state) => ({
  isEmpty: getListsSelector(state).isEmpty,
  isLoading: loadingSelector(state, LISTS),
  userId: userIdSelector(state)
})

const mapDispatchToProps = {
  getAllLists: getLists
}

export { ListsPage as ListsPageContainer }
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ListsPage)
