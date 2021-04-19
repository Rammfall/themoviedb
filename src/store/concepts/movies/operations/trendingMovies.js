import { createLogic } from 'redux-logic'

import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'
import { dashboardConstant, moviesConstant } from 'Constants/concepts'
import apiRoutes from 'Constants/ApiRoutes'
import { getCurrentPage } from 'Store/concepts/router/selectors'

import { saveDashboardIds, saveDashboardTotal } from '../actions'
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
    dispatch(dataApiRequest({ endpoint: dashboardConstant }))
    const page = getCurrentPage(getState())
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(apiRoutes.movies.trending, { params: { page } })

    const normalizedResponse = normalizeMovies(results)

    dispatch(dataApiSuccess({ endpoint: dashboardConstant }))
    dispatch(dataApiSave({ endpoint: moviesConstant, response: normalizedResponse.entities.movie }))
    dispatch(saveDashboardIds({ ids: normalizedResponse.result }))
    dispatch(saveDashboardTotal({ total: totalResults }))

    done()
  }
})

export default getTrendingMoviesOperation
