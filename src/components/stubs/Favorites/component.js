import React from 'react'
import {
  Layout, Row, Col, Typography, Modal, Pagination
} from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { range } from 'lodash'

import Header from '../Header'
import Movie from '../MovieItem'

const showDeleteMovieModal = () => {
  Modal.confirm({
    title: 'Do you want to delete movie from favorites?',
    onOk() {},
    onCancel() {}
  })
}

const Favorites = () => (
  <Layout>
    <Header />
    <Layout.Content>
      <Row>
        <Col
          offset={2}
          span={20}
        >
          <div className="top-margin">
            <Typography.Title>Favorites</Typography.Title>
          </div>
        </Col>
      </Row>
      <Row
        gutter={8}
        type="flex"
      >
        <Col
          span={20}
          offset={2}
        >
          <Row
            gutter={{
              xs: 8, sm: 16, md: 24, lg: 32
            }}
          >
            {range(10).map(item => (
              <Col
                key={item}
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
              >
                <Movie
                  actions={[
                    <DeleteOutlined
                      key="delete"
                      onClick={showDeleteMovieModal}
                    />
                  ]}
                />
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
    </Layout.Content>
  </Layout>
)

export default Favorites
