import React from 'react'
import {
  Layout, Row, Col, Input, Empty
} from 'antd'

import Header from '../Header'

const Dashboard = () => (
  <Layout>
    <Header />
    <Layout.Content>
      <Row type="flex">
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 18, offset: 3 }}
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 14, offset: 5 }}
        >
          <Input.Search
            placeholder="Enter movie name"
            size="large"
            enterButton="Search"
            className="top-margin"
          />
        </Col>
      </Row>
      <div className="top-margin">
        <Empty
          description="No movies found"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </div>
    </Layout.Content>
  </Layout>
)

export default Dashboard
