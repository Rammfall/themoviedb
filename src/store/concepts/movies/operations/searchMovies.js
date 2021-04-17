import { createLogic } from 'redux-logic'

import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'
import { saveDashboardTotal, saveDashboardIds } from 'Store/concepts/movies/actions'

import { getCurrentPage } from 'Store/concepts/router/selectors'
import { SEARCH } from '../types'
import { moviesConstant, searchMovies, dashboard } from '../endpoints'

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
    dispatch(dataApiRequest({ endpoint: dashboard }))
    const page = getCurrentPage(getState())
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(searchMovies, { params: { page, query } })

    const normalizedResponse = normalizeMovies(results)

    dispatch(dataApiSuccess({ endpoint: dashboard }))
    dispatch(dataApiSave({ endpoint: moviesConstant, response: normalizedResponse.entities.movie || {} }))
    dispatch(saveDashboardIds({ ids: normalizedResponse.result }))
    dispatch(saveDashboardTotal({ total: totalResults }))
    done()
  }
})

export default searchMoviesOperation
