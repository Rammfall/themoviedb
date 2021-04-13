import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Typography } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const ListCard = ({ name, description }) => (
  <Col
    xs={{ span: 24 }}
    sm={{ span: 12 }}
    md={{ span: 8 }}
    lg={{ span: 8 }}
    xl={{ span: 6 }}
  >
    <Card
      hoverable
      className="top-margin"
      actions={[
        <DeleteOutlined
          key="delete"
        />
      ]}
    >
      <Typography.Title level={4}>
        {name}
      </Typography.Title>
      {description}
    </Card>
  </Col>
)

ListCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ListCard
