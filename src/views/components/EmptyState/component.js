import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd'

const EmptyState = ({ title }) => (
  <div className='top-margin'>
    <Empty
      description={title}
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  </div>
)

EmptyState.propTypes = {
  title: PropTypes.string.isRequired
}

export default EmptyState
