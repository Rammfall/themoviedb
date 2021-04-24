import { createLogic } from 'redux-logic'

import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'
import { DASHBOARD, MOVIES } from 'Constants/concepts'
import apiRoutes from 'Constants/apiRoutes'
import { getCurrentPage } from 'Store/concepts/router/selectors'

import { SEARCH } from '../types'
import { saveDashboard } from '../actions'

const searchMoviesOperation = createLogic({
  type: SEARCH,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        query
      },
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
    } = await httpClient.get(apiRoutes.dashboard.search, { params: { page, query } })

    const normalizedResponse = normalizeMovies(results)

    dispatch(dataApiSuccess({ endpoint: DASHBOARD }))
    dispatch(dataApiSave({ endpoint: MOVIES, response: normalizedResponse.entities.movie }))
    dispatch(saveDashboard({ ids: normalizedResponse.result, total: totalResults }))
    done()
  }
})

export default searchMoviesOperation
