import { createLogic } from 'redux-logic'

import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'

import { saveFoundedIds, saveFoundedQuantity } from 'Store/concepts/movies/actions'
import { SEARCH } from '../types'
import { moviesConstant, searchMovies } from '../endpoints'

const searchMoviesOperation = createLogic({
  type: SEARCH,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        page,
        query
      }
    },
    dispatch,
    done
  ) {
    dispatch(dataApiRequest({ endpoint: searchMovies }))
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(searchMovies, { params: { page, query } })

    const normalizedResponse = normalizeMovies(results)

    dispatch(dataApiSuccess({ endpoint: searchMovies }))
    dispatch(dataApiSave({ endpoint: moviesConstant, response: normalizedResponse.entities.movies }))
    dispatch(saveFoundedIds({ moviesIds: normalizedResponse.result }))
    dispatch(saveFoundedQuantity({ quantity: totalResults }))

    done()
  }
})

export default searchMoviesOperation
