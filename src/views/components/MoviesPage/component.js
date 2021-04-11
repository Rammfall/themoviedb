import React from 'react'
import PropTypes from 'prop-types'

import SearchForm from 'Views/components/SearchForm'
import PrivateLayout from 'Views/layouts/PrivateLayout'
import MoviesLoader from 'Views/components/MoviesLoader'
import MoviesList from 'Views/components/MoviesList'
import MoviesEmptyState from 'Views/components/MoviesEmptyState'
import RenderCtrl from 'Views/components/RenderCtrl'

const MoviesPage = ({
  movies,
  isLoading,
  isEmpty
}) => (
  <PrivateLayout>
    <SearchForm />
    <div className='top-margin'>
      <RenderCtrl
        isLoading={isLoading}
        isEmpty={isEmpty}
        renderEmpty={<MoviesEmptyState />}
        renderLoading={<MoviesLoader />}
        renderList={(
          <MoviesList
            movies={movies}
          />
        )}
      />
    </div>
  </PrivateLayout>
)

MoviesPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    original_title: PropTypes.string,
    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string
  })).isRequired,
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool.isRequired
}

MoviesPage.defaultProps = {
  isLoading: null
}

export default MoviesPage
