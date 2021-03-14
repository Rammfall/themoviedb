import React from 'react'
import { Col, Row } from 'antd'

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
                    {movies.map(({ original_title, id, overview, poster_path }) => (
                      <Col
                        key={id}
                        xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        md={{ span: 8 }}
                        lg={{ span: 8 }}
                        xl={{ span: 6 }}
                      >
                        <MovieCard
                          title={original_title}
                          description={overview}
                          image={poster_path}
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>)
        }
        <Pagination
          total={quantity}
          current={current}
          onChange={getMovies}
        />
      </div>
    </>
  </PrivateLayout>
)

export default MoviesList
