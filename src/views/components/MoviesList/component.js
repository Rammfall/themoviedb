import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'antd'

import MovieCard from 'Views/components/shared/MovieCard'
import Pagination from 'Views/components/Pagination'

const MoviesList = ({
  movies,
  total,
  actions
}) => (
  <>
    <Row
      type='flex'
    >
      <Col
        className='gutter-row'
        span={20}
        offset={2}
      >
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32
          }}
        >
          {movies.map(({ original_title: originalTitle, id, overview, poster_path: posterPath }) => (
            <Col
              key={id}
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
            >
              <MovieCard
                title={originalTitle}
                description={overview}
                image={posterPath}
                actions={actions && actions(id)}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
    <Pagination total={total} />
  </>
)

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    original_title: PropTypes.string,
    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string
  })).isRequired,
  total: PropTypes.number
}

MoviesList.defaultProps = {
  total: null
}

export default MoviesList

