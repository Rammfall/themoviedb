import { createLogic } from 'redux-logic'

import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import normalizeMovies from 'Store/schemas/movies'

import { saveTrendingMoviesIds, saveTrendingQuantity } from '../actions'
import { GET_TRENDING } from '../types'
import { moviesConstant, trendingMovies } from '../endpoints'

const getTrendingMoviesOperation = createLogic({
  type: GET_TRENDING,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        page
      }
    },
    dispatch,
    done
  ) {
    dispatch(dataApiRequest({ endpoint: trendingMovies }))
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(trendingMovies, { params: { page } })

    const normalizedResponse = normalizeMovies(results)

    dispatch(dataApiSuccess({ endpoint: trendingMovies }))
    dispatch(dataApiSave({ endpoint: moviesConstant, response: normalizedResponse.entities.movie }))
    dispatch(saveTrendingMoviesIds({ moviesIds: normalizedResponse.result }))
    dispatch(saveTrendingQuantity({ quantity: totalResults }))

    done()
  }
})

export default getTrendingMoviesOperation
