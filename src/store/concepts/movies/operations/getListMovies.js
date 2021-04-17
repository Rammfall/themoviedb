import { createLogic } from 'redux-logic'

import apiRoutes from 'Constants/ApiRoutes'
import { getCurrentPage } from 'Store/concepts/router/selectors'
import normalizeMovies from 'Store/schemas/movies'
import { dataApiRequest, dataApiSuccess, dataApiSave } from 'Store/concepts/data/actions'
import { listsConstant, moviesConstant } from 'Constants/concepts'

import { GET_LIST_MOVIES } from '../types'

const getListMoviesOperation = createLogic({
  type: GET_LIST_MOVIES,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        id,
        withoutLoading
      },
      getState
    },
    dispatch,
    done
  ) {
    const route = apiRoutes.movies.list.get(id)
    const page = getCurrentPage(getState())

    if (!withoutLoading) dispatch(dataApiRequest({ endpoint: route }))

    const {
      data: {
        items,
        description,
        name,
        item_count: itemCount
      }
    } = await httpClient.get(route, {
      params: {
        page
      }
    })
    const normalizedData = normalizeMovies(items)
    dispatch(dataApiSuccess({ endpoint: route }))
    dispatch(dataApiSave({ endpoint: moviesConstant, response: normalizedData.entities.movie || {} }))
    dispatch(dataApiSave({ endpoint: listsConstant, response: {
      [id]: {
        movies: {
          ids: normalizedData.result,
          total: itemCount
        },
        name,
        description
      }
    }}))

    done()
  }
})

export default getListMoviesOperation
