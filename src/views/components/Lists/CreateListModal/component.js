import React from 'react'
import { Modal } from 'antd'
import { useIntl } from 'react-intl'
import { Form, Field } from 'formik'
import PropTypes from 'prop-types'

import InputField from 'Views/components/shared/InputField'

const CreateListModalComponent = ({
  isVisible,
  toggleHandler,
  isSubmitting,
  handleSubmit
}) => {
  const { formatMessage } = useIntl()

  return (
    <Modal
      visible={isVisible}
      onCancel={toggleHandler}
      okText={formatMessage({ id: 'lists.create.button' })}
      title={formatMessage({ id: 'lists.create.title' })}
      confirmLoading={isSubmitting}
      okButtonProps={{ htmlType: 'submit' }}
      onOk={handleSubmit}
    >
      <Form>
        <Field
          name="name"
          component={InputField}
          placeholder={formatMessage({
            id: 'lists.create.name'
          })}
        />
        <Field
          name="description"
          component={InputField}
          placeholder={formatMessage({
            id: 'lists.create.description'
          })}
        />
      </Form>
    </Modal>
  )
}

CreateListModalComponent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleHandler: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default CreateListModalComponent
