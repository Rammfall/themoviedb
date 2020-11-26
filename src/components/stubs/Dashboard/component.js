import React from 'react'
import {
  Layout, Row, Col, Input, Pagination
} from 'antd'
import { range } from 'lodash'

import Header from '../Header'
import Movie from '../MovieItem'

const Dashboard = () => (
  <Layout>
    <Header />
    <Layout.Content>
      <Row
        justify="center"
        gutter={{
          xs: 8, sm: 16, md: 24, lg: 22
        }}
      >
        <Col
          className="gutter-row"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 14 }}
          lg={{ span: 12 }}
          xl={{ span: 10 }}
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
        <Row
          type="flex"
          gutter={16}
        >
          <Col
            className="gutter-row"
            span={20}
            offset={2}
          >
            <Row
              gutter={{
                xs: 8, sm: 16, md: 24, lg: 32
              }}
            >
              {range(17).map(item => (
                <Col
                  key={item}
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                >
                  <Movie />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row
          type="flex"
          justify="center"
        >
          <Col>
            <Pagination
              defaultCurrent={1}
              total={50}
              className="pagination"
            />
          </Col>
        </Row>
      </div>
    </Layout.Content>
  </Layout>
)

export default Dashboard
