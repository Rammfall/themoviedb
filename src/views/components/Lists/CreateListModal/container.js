import React from 'react'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { withFormik } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import addListSubmit from 'Utils/formikEvents/addListSubmit'
import { addList } from 'Store/concepts/lists/actions'

import CreateListModalComponent from './component'

const CreateListModal = ({
  isVisible,
  toggleHandler,
  isSubmitting,
  handleSubmit
}) => (
  <CreateListModalComponent
    isVisible={isVisible}
    toggleHandler={toggleHandler}
    isSubmitting={isSubmitting}
    handleSubmit={handleSubmit}
  />
)

CreateListModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleHandler: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  onSubmit: addList
}

export { CreateListModal as CreateListModalContainer }
export default compose(
  connect(undefined, mapDispatchToProps),
  withRouter,
  withFormik({
    validationSchema: yup.object().shape({
      name: yup.string().required(),
      description: yup.string().required()
    }),
    mapPropsToValues: () => ({
      name: '',
      description: ''
    }),
    handleSubmit: addListSubmit
  })
)(CreateListModal)
