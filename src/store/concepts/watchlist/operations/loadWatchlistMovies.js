import { createLogic } from 'redux-logic'

import { userIdSelector } from 'Store/concepts/account/selectors'
import storage from 'Utils/storage'
import { dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'
import { MOVIES, WATCHLIST } from 'Constants/concepts'
import { getCurrentPage } from 'Store/concepts/router/selectors'
import apiRoutes from 'Constants/apiRoutes'

import { LOAD_WATCHLIST_MOVIES } from '../types'
import { saveWatchlistMovies } from '../actions'

const loadWatchlistMoviesOperation = createLogic({
  type: LOAD_WATCHLIST_MOVIES,
  latest: true,
  async process(
    {
      httpClient,
      getState
    },
    dispatch,
    done
  )
  {
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
    dispatch(dataApiSuccess(dataApiSuccess({ endpoint: WATCHLIST })))
    const normalizedData = normalizeMovies(results)
    dispatch(dataApiSave({ endpoint: MOVIES, response: normalizedData.entities.movie }))
    dispatch(saveWatchlistMovies({total: totalResults, ids: normalizedData.result }))

    done()
  }
})

export default loadWatchlistMoviesOperation
