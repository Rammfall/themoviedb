import { createLogic } from 'redux-logic'
import { normalize, schema } from 'normalizr'

import { dataApiRequest, dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'

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
    const { data: { results, total_results: totalResults } } = await httpClient.get(trendingMovies, { params: { page } })

    const movies = new schema.Entity('movies')
    const normalizedResponse = normalize(results, [movies])

    dispatch(dataApiSuccess({ endpoint: trendingMovies }))
    dispatch(dataApiSave({ endpoint: moviesConstant, response: normalizedResponse.entities.movies }))
    dispatch(saveTrendingMoviesIds({ moviesIds: normalizedResponse.result }))
    dispatch(saveTrendingQuantity({ quantity: totalResults }))

    done()
  }
})

export default getTrendingMoviesOperation
