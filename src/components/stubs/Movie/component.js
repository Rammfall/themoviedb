import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout,
  Row,
  Col,
  Carousel,
  Typography,
  Card,
  Tag,
  Popover,
  Button,
  Modal
} from 'antd'
import { HeartOutlined, BookOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { range } from 'lodash'

import Header from '../Header'
import CreateListModal from '../CreateListModal'

const PopoverContent = ({ openModal, closePopover }) => (
  <React.Fragment>
    <div>
      <Button
        type="link"
        onClick={() => {
          closePopover()
          openModal()
        }}
      >
        Create new list ...
      </Button>
    </div>
    <div>
      <Button type="link">List 1</Button>
    </div>
    <div>
      <Button type="link">List 2</Button>
    </div>
    <div>
      <Button type="link">List 3</Button>
    </div>
  </React.Fragment>
)

PopoverContent.propTypes = {
  openModal: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired
}

class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
      popoverVisible: false,
      bookmarked: false,
      watchlist: false
    }

    this.handleVisiblePopover = (visible) => {
      this.setState({ popoverVisible: visible })
    }

    this.showModal = () => {
      this.setState({ modalVisible: true })
    }

    this.hideModal = () => {
      this.setState({ modalVisible: false })
    }

    this.handleWatchlist = () => {
      this.setState(state => ({ watchlist: !state.watchlist }))
    }

    this.handleBookmark = () => {
      this.setState(state => ({ bookmarked: !state.bookmarked }))
    }
  }

  render() {
    const {
      modalVisible, popoverVisible, bookmarked, watchlist
    } = this.state
    return (
      <Layout>
        <Header />
        <Layout.Content>
          <Row type="flex">
            <Col span={24}>
              <Carousel autoplay>
                <div>
                  <img
                    className="movie-image"
                    src="https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="movie-image"
                    src="https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="movie-image"
                    src="https://image.tmdb.org/t/p/original/wMFad1v8SwyVvrKXmsIkLhSxCEC.jpg"
                    alt=""
                  />
                </div>
              </Carousel>
            </Col>
          </Row>
          <div className="top-margin">
            <Row>
              <Col
                span={20}
                offset={2}
              >
                <Typography.Title>
                  <span>Avengers: Endgame (2019)</span>
                  {' '}
                  <Popover
                    title="Add movie to list"
                    trigger="click"
                    visible={popoverVisible}
                    onVisibleChange={this.handleVisiblePopover}
                    content={(
                      <PopoverContent
                        openModal={this.showModal}
                        closePopover={() => this.handleVisiblePopover(false)}
                      />
                    )}
                  >
                    <PlusCircleOutlined />
                  </Popover>
                  {' '}
                  <HeartOutlined
                    theme={watchlist ? 'filled' : undefined}
                    onClick={this.handleWatchlist}
                  />
                  {' '}
                  <BookOutlined
                    theme={bookmarked ? 'filled' : undefined}
                    onClick={this.handleBookmark}
                  />
                </Typography.Title>
                <Typography.Title level={3}>Overview</Typography.Title>
                <Typography.Paragraph>
                  After the devastating events of Avengers: Infinity War, the universe is in ruins
                  due to the efforts of the Mad Titan, Thanos. With the help of remaining allies,
                  the Avengers must assemble once more in order to undo Thanos&apos; actions and
                  restore order to the universe once and for all, no matter what consequences may be
                  in store.
                </Typography.Paragraph>
              </Col>
            </Row>
            <Row>
              <Col
                span={20}
                offset={2}
              >
                <Typography.Paragraph>
                  <b>Original Language: </b>
                  <span>English</span>
                </Typography.Paragraph>
              </Col>
              <Col
                span={20}
                offset={2}
              >
                <Typography.Paragraph>
                  <b>Runtime: </b>
                  <span>3h 1m</span>
                </Typography.Paragraph>
              </Col>
              <Col
                span={20}
                offset={2}
              >
                <Typography.Paragraph>
                  <b>Budget: </b>
                  <span>$356,000,000.00</span>
                </Typography.Paragraph>
              </Col>
              <Col
                span={20}
                offset={2}
              >
                <Typography.Paragraph>
                  <b>Revenue: </b>
                  <span>$2,742,491,359.00</span>
                </Typography.Paragraph>
              </Col>
              <Col
                span={20}
                offset={2}
              >
                <Typography.Paragraph>
                  <b>Genres: </b>
                  <Tag>ADVENTURE</Tag>
                  <Tag>SCIENCE FICTION</Tag>
                  <Tag>ACTION</Tag>
                </Typography.Paragraph>
              </Col>
            </Row>
            <Row>
              <Col
                span={10}
                offset={2}
                className="top-margin"
              >
                <Typography.Title level={3}>Casts</Typography.Title>
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
                  {range(10).map(index => (
                    <Col
                      key={index}
                      xs={{ span: 24 }}
                      sm={{ span: 12 }}
                      md={{ span: 8 }}
                      lg={{ span: 8 }}
                      xl={{ span: 6 }}
                    >
                      <Card
                        cover={(
                          <img
                            alt="example"
                            src="https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg"
                          />
                      )}
                        className="top-margin"
                      >
                        <Card.Meta
                          title="Robert Downey Jr."
                          description="Ironman"
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                span={10}
                offset={2}
                className="top-margin"
              >
                <Typography.Title level={3}>Crew</Typography.Title>
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
                <Row gutter={{
                  xs: 8, sm: 16, md: 24, lg: 32
                }}
                >
                  {range(10).map(index => (
                    <Col
                      key={index}
                      xs={{ span: 12 }}
                      sm={{ span: 8 }}
                      md={{ span: 6 }}
                      lg={{ span: 8 }}
                      xl={{ span: 6 }}
                    >
                      <Card
                        cover={(
                          <img
                            alt="example"
                            src="https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg"
                          />
)}
                        className="top-margin"
                      >
                        <Card.Meta
                          title="Robert Downey Jr."
                          description="Ironman"
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
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
export default Movie
