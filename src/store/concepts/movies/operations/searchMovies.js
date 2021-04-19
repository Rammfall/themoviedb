import { createLogic } from 'redux-logic'

import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'
import { saveDashboardTotal, saveDashboardIds } from 'Store/concepts/movies/actions'
import { dashboardConstant, moviesConstant } from 'Constants/concepts'
import apiRoutes from 'Constants/ApiRoutes'
import { getCurrentPage } from 'Store/concepts/router/selectors'

import { SEARCH } from '../types'

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
    dispatch(dataApiRequest({ endpoint: dashboardConstant }))
    const page = getCurrentPage(getState())
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(apiRoutes.movies.search, { params: { page, query } })

    const normalizedResponse = normalizeMovies(results)

    dispatch(dataApiSuccess({ endpoint: dashboardConstant }))
    dispatch(dataApiSave({ endpoint: moviesConstant, response: normalizedResponse.entities.movie || {} }))
    dispatch(saveDashboardIds({ ids: normalizedResponse.result }))
    dispatch(saveDashboardTotal({ total: totalResults }))
    done()
  }
})

export default searchMoviesOperation
