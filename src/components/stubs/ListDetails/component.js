import React from 'react'
import {
  Layout, Row, Col, Typography, Modal, Pagination
} from 'antd'
import { MinusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { range } from 'lodash'

import Header from '../Header'
import CreateListModal from '../CreateListModal'
import Movie from '../MovieItem'

const showDeleteMovieModal = () => {
  Modal.confirm({
    title: 'Do you want to delete movie from this list?',
    onOk() {},
    onCancel() {}
  })
}

const showDeleteListModal = () => {
  Modal.confirm({
    title: 'Do you want to delete list?',
    onOk() {},
    onCancel() {}
  })
}

class ListDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = { modalVisible: false }

    this.showModal = () => {
      this.setState({ modalVisible: true })
    }

    this.hideModal = () => {
      this.setState({ modalVisible: false })
    }
  }

  render() {
    const { modalVisible } = this.state

    return (
      <Layout>
        <Header />
        <Layout.Content>
          <Row>
            <Col
              offset={2}
              span={20}
            >
              <div className="top-margin">
                <Typography.Title>
                  List item 1
                  {' '}
                  <MinusCircleOutlined onClick={showDeleteListModal} />
                </Typography.Title>
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
        <Modal
          visible={modalVisible}
          onCancel={this.hideModal}
          okText="Create"
          title="Create list"
        >
          <CreateListModal />
        </Modal>
      </Layout>
    )
  }
}

export default ListDetails
