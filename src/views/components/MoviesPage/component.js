import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import SearchForm from 'Views/components/SearchForm'
import PrivateLayout from 'Views/layouts/PrivateLayout'
import Loader from 'Views/components/Loader'
import DashboardMovies from 'Views/components/MoviesPage/DashboardMovies'
import RenderCtrl from 'Views/components/RenderCtrl'
import EmptyState from 'Views/components/EmptyState'

const MoviesPage = ({
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
          renderList={<DashboardMovies />}
        />
      </div>
    </PrivateLayout>
  )
}

MoviesPage.propTypes = {
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool.isRequired
}

MoviesPage.defaultProps = {
  isLoading: null
}

export default MoviesPage
