import React from 'react'
import { Col, Row } from 'antd'
import PropTypes from 'prop-types'

import SearchForm from 'Views/components/SearchForm'
import MovieCard from 'Views/components/shared/MovieCard'
import PrivateLayout from 'Views/layouts/PrivateLayout'
import Pagination from 'Views/components/Pagination'
import MoviesLoader from 'Views/components/MoviesLoader'

const MoviesList = ({ movies, quantity, isLoading, current, getMovies }) => (
  <PrivateLayout>
    <>
      <SearchForm />
      <div className='top-margin'>
        {
          isLoading
            ? (
              <MoviesLoader />
            )
            : (
              <>
                <Row
                  type='flex'
                  gutter={16}
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
                          />
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
                <Pagination
                  total={quantity}
                  current={current}
                  onChange={getMovies}
                />
              </>
            )
        }
      </div>
    </>
  </PrivateLayout>
)

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    original_title: PropTypes.string,
    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string
  })).isRequired,
  quantity: PropTypes.number,
  isLoading: PropTypes.bool,
  current: PropTypes.number.isRequired,
  getMovies: PropTypes.func.isRequired
}

MoviesList.defaultProps = {
  isLoading: null,
  quantity: null
}

export default MoviesList
