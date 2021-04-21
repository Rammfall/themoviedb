import { createLogic } from 'redux-logic'

import apiRoutes from 'Constants/ApiRoutes'
import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'
import { moviesConstant, favoritesConstant } from 'Constants/concepts'
import { getCurrentPage } from 'Store/concepts/router/selectors'
import storage from 'Utils/storage'

import { userIdSelector } from 'Store/concepts/account/selectors'
import { GET_FAVORITES_MOVIES } from '../types'
import { saveFavoritesMovies } from '../actions'

const getFavoritesMoviesOperation = createLogic({
  type: GET_FAVORITES_MOVIES,
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
  ) {
    if (!withoutLoading) dispatch(dataApiRequest({ endpoint: favoritesConstant }))
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
    dispatch(dataApiSuccess({ endpoint: favoritesConstant }))
    const normalizedData = normalizeMovies(results)
    dispatch(dataApiSave({ endpoint: moviesConstant, response: normalizedData.entities.movie || {} }))
    dispatch(saveFavoritesMovies({ total: totalResults, ids: normalizedData.result }))

    done()
  }
})

export default getFavoritesMoviesOperation
