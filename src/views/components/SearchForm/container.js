import React from 'react'
import { withFormik } from 'formik'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import * as yup from 'yup'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import queryParams from 'Utils/router/queryParams'
import { loadingSelector } from 'Store/concepts/data/selectors'
import { dashboard } from 'Store/concepts/movies/endpoints'

import pushParam from 'Utils/router/pushParam'
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
  isLoading: loadingSelector(state, dashboard)
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
    handleSubmit: ({ search }, { props: {
      history
    }}) => {
      pushParam(history, ['search', encodeURIComponent(search)])
    }
  })
)(SearchForm)
