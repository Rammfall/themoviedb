import React, { Component } from 'react'
import { compose } from 'ramda'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListDetails from 'Views/components/ListDetails'
import { getListDetails } from 'Store/concepts/listDetails/actions'
import { isBlankSelector } from 'Store/concepts/listDetails/selectors'

class ListDetailsPage extends Component {
  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    const { location: { search } } = this.props

    if (search !== prevProps.location.search) {
      this.getData()
    }
  }

  getData = () => {
    const { getMovies, match: { params: { id } } } = this.props

    getMovies({ id })
  }

  render() {
    const { isBlank } = this.props

    return(
      <ListDetails
        isBlank={isBlank}
      />
    )
  }
}

ListDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  getMovies: PropTypes.func.isRequired,
  isBlank: PropTypes.bool,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired
}
ListDetailsPage.defaultProps = {
  isBlank: true
}

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  isBlank: isBlankSelector(state, id)
})

const mapDispatchToProps = {
  getMovies: getListDetails
}

export { ListDetailsPage as ListDetailsPageContainer }
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ListDetailsPage)
