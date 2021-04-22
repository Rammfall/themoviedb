import { createLogic } from 'redux-logic'

import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'
import { DASHBOARD, MOVIES } from 'Constants/concepts'
import apiRoutes from 'Constants/apiRoutes'
import { getCurrentPage } from 'Store/concepts/router/selectors'

import { saveDashboard } from '../actions'
import { GET_TRENDING } from '../types'

const getTrendingMoviesOperation = createLogic({
  type: GET_TRENDING,
  latest: true,
  async process(
    {
      httpClient,
      getState
    },
    dispatch,
    done
  ) {
    dispatch(dataApiRequest({ endpoint: DASHBOARD }))
    const page = getCurrentPage(getState())
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(apiRoutes.dashboard.trending, { params: { page } })

    const normalizedResponse = normalizeMovies(results)

    dispatch(dataApiSuccess({ endpoint: DASHBOARD }))
    dispatch(dataApiSave({ endpoint: MOVIES, response: normalizedResponse.entities.movie }))
    dispatch(saveDashboard({ total: totalResults, ids: normalizedResponse.result }))

    done()
  }
})

export default getTrendingMoviesOperation
