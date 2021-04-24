import { createLogic } from 'redux-logic'

import apiRoutes from 'Constants/apiRoutes'
import { dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'
import { MOVIES, FAVORITES } from 'Constants/concepts'
import { getCurrentPage } from 'Store/concepts/router/selectors'
import storage from 'Utils/storage'
import { userIdSelector } from 'Store/concepts/account/selectors'

import { LOAD_FAVORITE_MOVIES } from '../types'
import { saveFavoritesMovies } from '../actions'

const loadFavoritesMoviesOperation = createLogic({
  type: LOAD_FAVORITE_MOVIES,
  latest: true,
  async process(
    {
      httpClient,
      getState
    },
    dispatch,
    done
  ) {
    const userId = userIdSelector(getState())
    const page = getCurrentPage(getState())
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(apiRoutes.movies.favorites.get(userId), {
      params: {
        session_id: storage.session.get(),
        page
      }
    })
    dispatch(dataApiSuccess({ endpoint: FAVORITES }))
    const normalizedData = normalizeMovies(results)
    dispatch(dataApiSave({ endpoint: MOVIES, response: normalizedData.entities.movie }))
    dispatch(saveFavoritesMovies({ total: totalResults, ids: normalizedData.result }))

    done()
  }
})

export default loadFavoritesMoviesOperation
