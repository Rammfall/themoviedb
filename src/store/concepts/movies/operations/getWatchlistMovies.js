import { createLogic } from 'redux-logic'

import { userIdSelector } from 'Store/concepts/account/selectors'
import storage from 'Utils/storage'
import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'

import { getCurrentPage } from 'Store/concepts/router/selectors'
import { GET_WATCHLIST_MOVIES } from '../types'
import { watchlistMoviesConstant, watchlistMoviesEndpoint, moviesConstant } from '../endpoints'
import { saveWatchlistMovies } from '../actions'

const getWatchlistMoviesOperation = createLogic({
  type: GET_WATCHLIST_MOVIES,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        withoutLoading
      },
      getState
    },
    dispatch,
    done
  )
  {
    if (!withoutLoading) dispatch(dataApiRequest({ endpoint: watchlistMoviesConstant }))
    const userId = userIdSelector(getState())
    const page = getCurrentPage(getState())
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(watchlistMoviesEndpoint(userId), { params: { page, session_id: storage.session.get() } })
    dispatch(dataApiSuccess(dataApiSuccess({ endpoint: watchlistMoviesConstant })))
    const normalizedData = normalizeMovies(results)
    dispatch(dataApiSave({ endpoint: moviesConstant, response: normalizedData.entities.movie || {} }))
    dispatch(saveWatchlistMovies({total: totalResults, ids: normalizedData.result }))

    done()
  }
})

export default getWatchlistMoviesOperation
