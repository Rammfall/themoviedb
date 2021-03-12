import React from 'react'
import { Avatar, Col, Dropdown, Layout, Row, Typography } from 'antd'
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

import Menu from './Menu'

const HeaderComponent = ({ username }) => (
  <Layout.Header>
    <Row
      type='flex'
      justify='space-between'
    >
      <Col>
        <Typography.Text>THE MOVIE DB</Typography.Text>
      </Col>
      <Col>
        <Dropdown overlay={<Menu />}>
          <Typography.Text>
            <Avatar icon={<UserOutlined />} />
            {' '}
            <span className='hide-sm-down'>{username}</span>
            {' '}
            <CaretDownOutlined />
          </Typography.Text>
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
)

HeaderComponent.propTypes = {
  username: PropTypes.string
}

HeaderComponent.defaultProps = {
  username: null
}

export default HeaderComponent
