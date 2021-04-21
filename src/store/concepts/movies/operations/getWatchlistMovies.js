import { createLogic } from 'redux-logic'

import { userIdSelector } from 'Store/concepts/account/selectors'
import storage from 'Utils/storage'
import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'
import { moviesConstant, watchlistConstant } from 'Constants/concepts'
import { getCurrentPage } from 'Store/concepts/router/selectors'
import apiRoutes from 'Constants/ApiRoutes'

import { GET_WATCHLIST_MOVIES } from '../types'
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
    if (!withoutLoading) dispatch(dataApiRequest({ endpoint: watchlistConstant }))
    const userId = userIdSelector(getState())
    const page = getCurrentPage(getState())
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(apiRoutes.movies.watchlist.get(userId), {
      params: {
        page,
        session_id: storage.session.get()
      }
    })
    dispatch(dataApiSuccess(dataApiSuccess({ endpoint: watchlistConstant })))
    const normalizedData = normalizeMovies(results)
    dispatch(dataApiSave({ endpoint: moviesConstant, response: normalizedData.entities.movie || {} }))
    dispatch(saveWatchlistMovies({total: totalResults, ids: normalizedData.result }))

    done()
  }
})

export default getWatchlistMoviesOperation
