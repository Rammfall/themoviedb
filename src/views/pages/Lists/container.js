import React, { Component } from 'react'
import { compose } from 'ramda'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getListsSelector, isEmptyListsSelector } from 'Store/concepts/lists/selectors'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { lists as listsConstant } from 'Store/concepts/lists/endpoints'
import { getLists } from 'Store/concepts/lists/actions'

import Lists from 'Views/components/Lists'
import { userIdSelector } from 'Store/concepts/account/selectors'
import queryParams from 'Utils/router/queryParams'

class ListsPage extends Component {
  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    const { userId, location: { search } } = this.props

    if(userId !== prevProps.userId || search !== prevProps.location.search) {
      this.getData()
    }
  }

  getData = () => {
    const { getAllLists, userId, location: { search } } = this.props
    const page = queryParams(search).get('page')

    if (userId) {
      getAllLists(page)
    }
  }

  render() {
    const { isEmpty, isLoading, lists } = this.props

    return (
      <Lists
        isEmpty={isEmpty}
        isLoading={isLoading}
        lists={lists}
      />
    )
  }
}

ListsPage.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
  })).isRequired,
  userId: PropTypes.number,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  getAllLists: PropTypes.func.isRequired
}

ListsPage.defaultProps = {
  isLoading: false,
  userId: null
}

const mapStateToProps = (state) => ({
  lists: getListsSelector(state),
  isEmpty: isEmptyListsSelector(state),
  isLoading: loadingSelector(state, listsConstant),
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
