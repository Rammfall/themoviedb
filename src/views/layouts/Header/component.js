import React from 'react'
import { Avatar, Col, Dropdown, Layout, Row, Typography } from 'antd'
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons'

import Menu from './Menu'

const HeaderComponent = () => (
  <Layout.Header>
    <Row
      type="flex"
      justify="space-between"
    >
      <Col>
        <Typography.Text>THE MOVIE DB</Typography.Text>
      </Col>
      <Col>
        <Dropdown overlay={<Menu />}>
          <Typography.Text>
            <Avatar icon={<UserOutlined />} />
            {' '}
            <span className="hide-sm-down">Username</span>
            {' '}
            <CaretDownOutlined />
          </Typography.Text>
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
)

export default HeaderComponent
