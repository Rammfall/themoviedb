import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Typography } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { LISTS } from 'Constants/concepts'

const ListCard = ({ name, description, onDelete, id }) => (
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
          onClick={onDelete}
        />
      ]}
    >
      <Link
        to={`${LISTS}/${id}`}
      >
        <Typography.Title level={4}>
          {name}
        </Typography.Title>
      </Link>
      {description}
    </Card>
  </Col>
)

ListCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

export default ListCard
