import React from 'react'
import { Col, Row } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { Form, Field } from 'formik'
import PropTypes from 'prop-types'

import InputField from 'Views/components/shared/InputField'

const SearchFormComponent = ({ handleSubmit, isLoading, handleReset }) => (
  <Row
    justify='center'
  >
    <Col
      className='gutter-row'
      xs={{ span: 20 }}
      sm={{ span: 20 }}
      md={{ span: 14 }}
      lg={{ span: 12 }}
      xl={{ span: 10 }}
    >
      <Form>
        <Field
          name='search'
          component={InputField}
          type='search'
          placeholder='Enter movie name'
          size='large'
          enterButton='Search'
          className='top-margin'
          prefix={<CloseOutlined onClick={handleReset} />}
          onSearch={handleSubmit}
          loading={isLoading}
        />
      </Form>
    </Col>
  </Row>
)

SearchFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

SearchFormComponent.defaultProps = {
  isLoading: false
}

export default SearchFormComponent
