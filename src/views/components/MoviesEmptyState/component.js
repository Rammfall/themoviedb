import React from 'react'
import { Empty } from 'antd'
import { useIntl } from 'react-intl'

const MoviesEmptyState = () => {
  const { formatMessage } = useIntl()

  return (
    <div className='top-margin'>
      <Empty
        description={formatMessage({ id: 'movies.empty' })}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    </div>
  )
}

export default MoviesEmptyState
