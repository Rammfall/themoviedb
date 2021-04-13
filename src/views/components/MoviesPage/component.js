import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import SearchForm from 'Views/components/SearchForm'
import PrivateLayout from 'Views/layouts/PrivateLayout'
import Loader from 'Views/components/Loader'
import MoviesList from 'Views/components/MoviesList'
import RenderCtrl from 'Views/components/RenderCtrl'
import EmptyState from 'Views/components/EmptyState'

const MoviesPage = ({
  movies,
  isLoading,
  isEmpty
}) => {
  const { formatMessage } = useIntl()

  return (
    <PrivateLayout>
      <SearchForm />
      <div className='top-margin'>
        <RenderCtrl
          isLoading={isLoading}
          isEmpty={isEmpty}
          renderEmpty={<EmptyState title={formatMessage({ id: 'movies.empty' })} />}
          renderLoading={<Loader />}
          renderList={(
            <MoviesList
              movies={movies}
            />
          )}
        />
      </div>
    </PrivateLayout>
  )
}

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
