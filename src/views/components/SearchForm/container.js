import React from 'react'
import { withFormik } from 'formik'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import * as yup from 'yup'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import queryParams from 'Utils/router/queryParams'
import searchSubmit from 'Utils/formikEvents/searchSubmit'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { dashboardConstant } from 'Constants/concepts'

import SearchFormComponent from './component'

const SearchForm = ({ handleSubmit, isLoading, handleReset }) => (
  <SearchFormComponent
    handleSubmit={handleSubmit}
    isLoading={isLoading}
    handleReset={handleReset}
  />
)

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

SearchForm.defaultProps = {
  isLoading: false
}

const mapStateToProps = (state) => ({
  isLoading: loadingSelector(state, dashboardConstant)
})

export { SearchForm as SearchFormContainer }
export default compose(
  withRouter,
  connect(mapStateToProps),
  withFormik({
    validationSchema: yup.object().shape({
      search: yup.string()
    }),
    mapPropsToValues: ({ location: { search: query } }) => {
      const searchQuery = decodeURIComponent(queryParams(query).get('search') || '')

      return {
        search: searchQuery
      }
    },
    handleSubmit: searchSubmit
  })
)(SearchForm)
