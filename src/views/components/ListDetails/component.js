import React from 'react'
import { Col, Row, Typography } from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

import PrivateLayout from 'Views/layouts/PrivateLayout'
import RenderCtrl from 'Views/components/RenderCtrl'
import Loader from 'Views/components/Loader'
import EmptyState from 'Views/components/EmptyState'
import ListMovies from 'Views/components/stubs/ListDetails/ListMovies'

const ListDetails = ({
  isEmpty,
  isLoading,
  title,
  titleEmpty
}) => (
  <PrivateLayout>
    <Row>
      <Col
        offset={2}
        span={20}
      >
        <div className='top-margin'>
          <Typography.Title>
            {title}
            {' '}
            <MinusCircleOutlined />
          </Typography.Title>
        </div>
      </Col>
    </Row>
    <RenderCtrl
      isEmpty={isEmpty}
      isLoading={isLoading}
      renderLoading={<Loader />}
      renderEmpty={<EmptyState title={titleEmpty} />}
      renderList={<ListMovies />}
    />
  </PrivateLayout>
)

ListDetails.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired
}

ListDetails.defaultProps = {
  isLoading: true
}

export default ListDetails
